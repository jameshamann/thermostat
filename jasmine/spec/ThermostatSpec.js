'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('has a starting temp of 20 degrees', function(){
    expect(thermostat.checkTemp()).toEqual(20);
  });

  describe('change temperature', function (){

    it('can increase the temperature with a button', function(){
      thermostat.increaseTemp();
      expect(thermostat.checkTemp()).toEqual(21);

    });

  });



});
