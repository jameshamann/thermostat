'use strict';

function Thermostat() {
  this._temperature = 20;
  this.currTemp = this._temperature;
}

Thermostat.prototype = {
  checkTemp: function() {
    return this.currTemp;

  },

  increaseTemp: function() {
     this.currTemp++;
  }
};
