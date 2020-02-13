module Dom5

  # Nation property numbers. These should all be listed in
  # attribute_keys.csv, but not all there.
  ATTR_HOME_REALM = 289
  ATTR_CHEAP_GOD_20 = 314
  ATTR_CHEAP_GOD_40 = 315
  ATTR_BLESS_BONUS  = 330..337
  BLESS_PATHS = %w[F A W E S D N B].map(&:intern)
  
  ATTR_NO_UNDEAD_PRETENDER = 41
  ATTR_COLD_SCALE = 58
  ATTR_GROWTH_SCALE = 324

  module InspectorReader
    def read
      read_nations
      read_pretenders
      read_nation_pretenders
      read_nation_attrs
    end
    
    private
    def read_a_file(basename)
      csv_file = File.join(@data_dir, "#{basename}.csv")
      CSV.foreach( csv_file,
                   headers: true,
                   header_converters: :symbol,
                   col_sep: "\t") do | entry |
        yield entry
      end
    end

    ERAS = Hash[ *%w|1 EA 2 MA 3 LA| ]
    def read_nations
      read_a_file('nations') do | nation |
        nation = Nation.new( *nation.fields(*NATION_FIELDS) )
        nation.era = ERAS[nation.era]
        @nations[ nation[:id] ] = nation
      end
    end
    
    def read_pretenders
      read_a_file('BaseU') do | unit |
        # Not a pretender
        next unless unit[:startdom]
        # Variant form of known pretender
        if unit[:shapechange] && @pretenders.key?( unit[:shapechange] )
          warn "Skipping %s (shapechange of %s)" %
               [ unit[:name], @pretenders[ unit[:shapechange] ][:name] ]
          next
        end

        pret_id = unit[:id]
        pretender_dat = unit.fields(*PRETENDER_FIELDS_STR) +
                        unit.fields(*PRETENDER_FIELDS_INT).map(&:to_i)
        pretender = Pretender.new( *pretender_dat )
        pretender.pathcost ||= 10
        @pretenders[pret_id] = pretender
        
        [ :realm1, :realm2, :realm3 ].each do | r_key |
          if realm_id = unit[r_key]
            @realm_pretenders[ realm_id ] << pret_id
          end
        end
        
        @undead_pretenders << pret_id if unit[:undead]
      end
    end

    # Individually per-nation exceptions to the 
    def read_nation_pretenders
      read_a_file('pretender_types_by_nation') do | pr_na |
        @nation_extra_pretenders[ pr_na[:nation_number] ] <<
          pr_na[:monster_number ]
      end
      
      read_a_file('unpretender_types_by_nation') do | pr_na |
        @nation_not_pretenders[ pr_na[:nation_number] ] <<
          pr_na[:monster_number ]
      end
    end
    
    def read_nation_attrs
      read_a_file("attributes_by_nation") do | nat_attr |
        attr, nation_id, val = nat_attr.fields(:attribute,
                                               :nation_number,
                                               :raw_value)
        nation = @nations[ nation_id ]
        attr_i = attr.to_i
        
        if attr_i == ATTR_HOME_REALM
          nation.realms ||= []
          nation.realms << val
        elsif attr_i == ATTR_CHEAP_GOD_20
          nation.cheap_gods ||= {}
          nation.cheap_gods[ val ] = 20
        elsif attr_i == ATTR_CHEAP_GOD_40
          nation.cheap_gods ||= {}
          nation.cheap_gods[ val ] = 40
        elsif attr_i == ATTR_NO_UNDEAD_PRETENDER
          @no_undead_nations << nation_id
        elsif attr_i == ATTR_COLD_SCALE
          nation.scales ||= {}
          nation.scales[:heat] = -val.to_i
        elsif attr_i == ATTR_GROWTH_SCALE
          nation.scales ||= {}
          nation.scales[:growth] = val.to_i
        elsif ATTR_BLESS_BONUS.include?(attr_i)
          bless_path = BLESS_PATHS[attr_i - ATTR_BLESS_BONUS.begin]
          nation.bless_bonus ||= {}
          nation.bless_bonus[ bless_path ] = val.to_i
        end
      end
    end
  end
end
