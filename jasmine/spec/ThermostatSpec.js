'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('has a starting temp of 20 degrees', function(){
    expect(thermostat.checkTemp()).toEqual(20);
  });

  it('has a minimum temp of 10 degrees', function() {
    for(let i = 0;i <11; i++) {
      thermostat.decreaseTemp();
    }
    expect(thermostat.checkTemp()).toEqual(10);
  });

  describe('change temperature', function (){

    it('can increase the temperature with a button', function(){
      thermostat.increaseTemp();
      expect(thermostat.checkTemp()).toEqual(21);
    });
    it('can decrease the temperature with a button', function(){
      thermostat.decreaseTemp();
      expect(thermostat.checkTemp()).toEqual(19);
    });
  });

  describe('Power saving mode', function(){

    it('has a max temp of 25 when power saving mode is on', function (){
      for(let i = 0; i < 6; i++) {
        thermostat.increaseTemp();
      }
      expect(thermostat.checkTemp()).toEqual(25);
    });

    it('has a maximum of 32 when power saving mode is off', function (){
      thermostat.switchOffPowerSave();
      for(let i = 0; i < 13; i++) {
        thermostat.increaseTemp();
      }
      expect(thermostat.checkTemp()).toEqual(32)
    });
    it('can switch PSM back on', function() {
      thermostat.switchOffPowerSave();
      expect(thermostat.isPowerSaveOn()).toBe(false);
      thermostat.switchOnPowerSave();
      expect(thermostat.isPowerSaveOn()).toBe(true);
    });
  });

describe('reset button', function() {
  it('resets the temperature to 20 degrees', function() {
    thermostat.reset();
    expect(thermostat.checkTemp()).toEqual(20);
  });
});

describe('energy usage', function() {
  it('displays green when temp is less than 18 degrees', function() {
    for(let i = 0; i <3; i++) {
      thermostat.decreaseTemp();
    }
    expect(thermostat.energyUsage()).toEqual("green");
  });
  it('displays yellow when temp is between 18 and 24 degrees', function() {
    for(let i = 0; i <4; i++) {
      thermostat.increaseTemp();
    }
    expect(thermostat.energyUsage()).toEqual("yellow");
  });
  it('displays green when temp is more than 24 degrees', function() {
    for(let i = 0; i <5; i++) {
      thermostat.increaseTemp();
    }
    expect(thermostat.energyUsage()).toEqual("red");
  });
});
});
