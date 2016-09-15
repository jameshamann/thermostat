'use strict';

$(document).ready(function() {
  var thermostat = new Thermostat();
  updateDisplay();

  function updateDisplay() {
    document.getElementById("displayTemp").innerHTML = thermostat.checkTemp();
    document.getElementById("powerSave").innerHTML = thermostat.isPowerSaveOn();
  }

  $("#increase").click(function() {
    thermostat.increaseTemp();
    updateDisplay();
  });
  $("#decrease").click(function() {
    thermostat.decreaseTemp();
    updateDisplay();
  });
  $("#reset").click(function() {
    thermostat.reset();
    updateDisplay();
  });
  $("#powerSaveOn").click(function() {
    thermostat.switchOnPowerSave();
    updateDisplay();
  });
  $("#powerSaveOff").click(function() {
    thermostat.switchOffPowerSave();
    updateDisplay();
  });
});
