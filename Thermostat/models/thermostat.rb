require 'data_mapper'
require 'dm-postgres-adapter'

class Thermostat
  include DataMapper::Resource

  property :id, Serial
  property :appid, Integer
  property :temperature, Integer
  property :mode, String

end
