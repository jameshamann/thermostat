'use strict';

function Thermostat() {
  this._temperature = 20;
}

Thermostat.prototype = {
  currTemp: function() {
    return this._temperature;
  }
};
