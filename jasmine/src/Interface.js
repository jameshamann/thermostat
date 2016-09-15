'use strict';

$(document).ready(function() {
  var thermostat = new Thermostat();
  function getWeather(city) {
      var city = city || "London"
      $.get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=e064e1033e86a9347cfcc7da69705933&mode=html",function(data){
      document.getElementById("getWeather").innerHTML = data; })
  }

  getWeather();

  updateDisplay();
  function updateDisplay() {
    document.getElementById("displayTemp").innerHTML = thermostat.checkTemp();
    document.getElementById("powerSave").innerHTML = thermostat.isPowerSaveOn();
    updateEnergy();
  }

  function updateEnergy() {
    $("#displayTemp").attr("class",thermostat.energyUsage());
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

  $("#updateCity").click(function() {
    var city = $("#cityInput").val();
    getWeather(city);
  });



});
