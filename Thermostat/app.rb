ENV['RACK_ENV'] = 'development'
require 'sinatra/base'
require 'json'
require_relative 'data_mapper_setup.rb'

class App < Sinatra::Base
set :public_folder, File.dirname(__FILE__) + '/public'

  get '/' do
    erb :thermostat
  end

  post '/thermostat' do
    Thermostat.create(appid: params[:appid], temperature: params[:temperature], mode: params[:mode])
  end

  get '/thermostat' do
    record = Thermostat.last(appid: params[:appid])
    {temperature: record.temperature, mode: record.mode}.to_json
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
