require 'data_mapper'
require 'dm-postgres-adapter'

#models

# DataMapper.setup(:default, ENV['DATABASE_URL'] || "postgres://localhost/thermostat_#{ENV['RACK_ENV']}")
# #DataMapper::Logger.new($STDOUT, :debug)
# DataMappper.finalize
# DataMapper.auto_upgrade!
