'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  })

  it('has a starting temp of 20 degrees', function(){
    expect(thermostat.currTemp()).toEqual(20);
  });

});
