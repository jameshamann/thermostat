'use strict';

function Thermostat() {
  this._temperature = 20;
  this.currTemp = this._temperature;
  this.minTemp = 10;
}

Thermostat.prototype = {
  checkTemp: function() {
    return this.currTemp;

  },

  increaseTemp: function() {
     this.currTemp++;
  },

  decreaseTemp: function() {
    if(this.currTemp === 10) {
      return;
    }
    this.currTemp--;
  }
};
