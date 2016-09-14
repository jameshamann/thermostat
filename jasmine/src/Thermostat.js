'use strict';

function Thermostat() {
  this._temperature = 20;
  this.currTemp = this._temperature;
  this.MIN_TEMP = 10;
  this.POWER_SAVE_MAX_TEMP = 25
}

Thermostat.prototype = {
  checkTemp: function() {
    return this.currTemp;

  },

  increaseTemp: function() {
     this.currTemp++;
 },

  decreaseTemp: function() {
    if(this.isMinTemp()) {
      return;
    }
    this.currTemp -- ;
  },

  isMinTemp: function() {
    return this.currTemp === this.MIN_TEMP;
  }
};
