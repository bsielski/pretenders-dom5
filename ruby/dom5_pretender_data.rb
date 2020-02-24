require 'csv'
require 'json'

module Dom5
  PRETENDER_FIELDS_STR = [ :id, :name ]
  PRETENDER_FIELDS_INT = [ :startdom, :pathcost, :minprison,
                           :f, :a, :w, :e,
                           :s, :d, :n, :b ]
  PRETENDER_FIELDS = PRETENDER_FIELDS_STR +
                     PRETENDER_FIELDS_INT
  Pretender = Struct.new(*PRETENDER_FIELDS) do
    def to_json(*args)
      to_h.to_json
    end
  end

  NATION_FIELDS = [ :id, :name, :epithet, :era, :realms,
                    :bless_bonus, :scales, :cheap_gods ]
  Nation = Struct.new(*NATION_FIELDS) do
    def to_json(*args)
      to_h.to_json
    end
  end

  require_relative 'dom5_reader'

  class PretenderData
    include InspectorReader
    
    def initialize(data_dir)
      # Source data from inspector
      @data_dir = data_dir
      # Nation data, :nation_id ⇒ Nation
      @nations = {}
      # Pretender data, :unit_id ⇒ Pretender
      @pretenders = {}
      # Pretenders by realm, :realm_id ⇒ [ pretender_ids ]
      @realm_pretenders = Hash.new{ | h,k | h[k] = [] }
      # Extra pretenders for nations, :nation_id ⇒ [ pretender_ids ]
      @nation_extra_pretenders = Hash.new{ | h,k | h[k] = [] }
      # Pretenders excluded for nations, :nation_id ⇒ [ pretender_ids ]
      @nation_not_pretenders = Hash.new{ | h,k | h[k] = [] }
      # Pretenders which are undead, [ pretender_ids ] 
      @undead_pretenders = []
      # Nations not permitted undead pretenders, [ pretender_ids ] 
      @no_undead_nations = []
    end

    # Check that the output directory contains costs for all pretenders
    # we know about, and that the names match.
    def verify(out_dir)
      costs_raw = File.read( File.join(out_dir, "pretender_costs.json") )
      costs = JSON.load( costs_raw)
      @pretenders.each do | p_id, pret |
        unless costs.key? pret.id
          warn "No pretender cost info for '#{pret.name}' (#{pret.id})"
          next
        end
        # There are a few pretenders which are in the game data but not
        # assigned to any nation.
        unless costs[ pret.id ]["pointcost"]
          warn "Null cost given for '#{pret.name}'"
        end
        unless costs[ pret.id ]["name"] == pret.name
          warn "Mismatched names #{costs[ pret.id ]["name"]} ≠ #{pret.name}"
        end
      end
    end
    
    def export(out_dir)
      pret_path = File.join(out_dir, "pretenders.json")
      File.open( pret_path, 'w') do | out_f |
        JSON.dump(@pretenders, out_f)
      end
      
      nat_out = File.join(out_dir, "nations.json")
      File.open( nat_out, 'w') do | out_f |
        JSON.dump(@nations, out_f)
      end

      natp_out = File.join(out_dir, "nations_pretenders.json")
      File.open( natp_out, 'w') do | out_f |
        JSON.dump(nations_pretenders, out_f)
      end
    end

    def nations

    end

    # Find all the pretenders for nation and return as a list of ids.
    # This follows the rules Dominions uses for working out which
    # Pretenders are available to which nations. Each nation belongs to
    # several "realms" (world cultural areas, such as "african"); there
    # is a 'default' realm. Each pretender originates in one or more of
    # these realms. A nation's base set is all the pretenders from all
    # its realms. Some nations have specific extra pretenders or
    # specific exclusions (e.g. some are not allowed any human-sized
    # ones), and a few are not allowed any undead pretenders.
    def nation_pretenders(nation)
      natp = []
      nation.realms.each do | realm |
        natp += @realm_pretenders[ realm ]
      end
      @nation_extra_pretenders[ nation.id ].each do | pret |
        next unless @pretenders.key?(pret)
        natp << pret
      end
      @nation_not_pretenders[ nation.id ].each do | pret |
        natp.delete(pret)
      end
      if @no_undead_nations.include?(nation.id)
        natp -= @undead_pretenders
      end
      natp.sort_by(&:to_i).uniq
    end
    
    def nations_pretenders
      nat_p = {}
      @nations.values.each do | nation |
        nat_p[ nation.id ] = nation_pretenders(nation)
      end
      nat_p
    end
  end
end

