'use strict';

function Thermostat() {
  this._temperature = 20;
  this.currTemp = this._temperature;
  this.MIN_TEMP = 10;
  this.POWER_SAVE_MAX_TEMP = 25;
  this.MAX_TEMP = 32;
  this.powerSave = true;

}

Thermostat.prototype = {
  checkTemp: function() {
    return this.currTemp;

  },

  increaseTemp: function() {
    if (this.isMaxTemp()) {
      return;
    }
    this.currTemp++;
  },

  decreaseTemp: function() {
    if(this.isMinTemp()) {
      return;
    }
    this.currTemp--;
  },

  isMinTemp: function() {
    return this.currTemp === this.MIN_TEMP;
  },

  isMaxTemp: function() {
    if (this.isPowerSaveOn()) {
      return this.currTemp === this.POWER_SAVE_MAX_TEMP;
    }
    return this.currTemp === this.MAX_TEMP;
  },

  switchOffPowerSave: function() {
    this.powerSave = false;
  },

  switchOnPowerSave: function() {
    this.powerSave = true;
  },

  isPowerSaveOn: function() {
    return this.powerSave === true;
  },

  reset: function() {
    this.currTemp = 20;
  },

  energyCalculator: function() {
    if (this.checkTemp() <18) {
      return "green";
  } else if (this.checkTemp() <25) {
    return "yellow";
  }
    return "red";
  },

  energyUsage: function() {
    return this.energyCalculator();
    }
};
