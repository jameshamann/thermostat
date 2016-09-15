require 'spec_helper'
require 'json'

describe App do
  def app
    described_class
  end

  it 'saves via post request' do
    post '/thermostat', {appid: 1, temperature: 18, mode: 'on'}
    expect(Thermostat.first.temperature).to equal(18)
  end

  it ' returns via get request' do
    post '/thermostat', {appid: 1, temperature: 19, mode: 'on'}
    get '/thermostat', {appid: 1}
    expect(last_response.body).to eq({temperature: 19, mode: 'on'}.to_json)
  end
end
