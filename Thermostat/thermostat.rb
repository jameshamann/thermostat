require 'sinatra/base'
require_relative 'data_mapper_setup'

class Thermostat < Sinatra::Base
set :public_folder

  get '/' do
    erb :thermostat
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
