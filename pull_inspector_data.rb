require_relative 'ruby/dom5_pretender_data'

# Set location of source data
pd = Dom5::PretenderData.new("../dom5inspector/gamedata")

# Read it in
pd.read

# Check whether all pretenders have costs
pd.verify("src/data")

# Write nation & pretender information for the bless calculator
pd.export("src/data")



