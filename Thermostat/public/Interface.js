'use strict';
$(document).ready(function() {
  var thermostat = new Thermostat();
  reloadWeather();
  getWeather();

  function getWeather(city) {
      var city = city || "London"
      $.get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=e064e1033e86a9347cfcc7da69705933&mode=html",function(data){
      document.getElementById("getWeather").innerHTML = data; })
  }


  function saveWeather() {
      $.post("http://localhost:9292/thermostat",{appid: 1, temperature: thermostat.checkTemp(), mode: thermostat.isPowerSaveOn()});
  }

  function reloadWeather() {
      $.get("http://localhost:9292/thermostat?appid=1", function(data){
        var parseData = JSON.parse(data);
        thermostat.currTemp = parseData.temperature;
        thermostat.powerSave = parseData.mode;
        
        updateDisplay();
      });
  }

  function updateDisplay() {
    document.getElementById("displayTemp").innerHTML = thermostat.checkTemp();
    updateEnergy();
    saveWeather();
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
    $("#powerSaveOff").attr("class","btn btn-default");
    $("#powerSaveOn").attr("class","btn btn-default-active");
    updateDisplay();
  });
  $("#powerSaveOff").click(function() {
    thermostat.switchOffPowerSave();
    $("#powerSaveOff").attr("class","btn btn-default-active");
    $("#powerSaveOn").attr("class","btn btn-default");
    updateDisplay();
  });

  $("#updateCity").click(function() {
    var city = $("#cityInput").val();
    getWeather(city);
  });
});
