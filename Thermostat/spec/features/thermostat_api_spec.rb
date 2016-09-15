require 'spec_helper'

feature 'saving state via api' do
  scenario 'saving via get request' do
    post '/thermostat', {temperature: 18, mode: 'on'}
  end
end
