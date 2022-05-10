let searchForm = document.querySelectorAll("#search-form");
let searchInput = document.querySelectorAll("#search-input");
let overviewContainer = document.querySelectorAll(".overview-container");
let historyContainer = document.querySelectorAll(".search-history");
let fiveDayForecast = document.querySelectorAll(".five-day-forecast");
var city = "Chicago"


function showFiveDayForecast() {
    var APIkey = '63e195e07e4897eb45e421f76c43b1dd';
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey;
   
    fetch(apiUrl)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      drawWeather(data);
      console.log(apiUrl)
    })
    .catch(function() {
      // catch any errors
    });
}

function drawWeather( d ) {
	var fahrenheight = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
	
    document.getElementById('location').innerHTML = "City: " + d.name;
	document.getElementById('description').innerHTML = d.weather[0].description;
	document.getElementById('temp').innerHTML = "Temp: " + fahrenheight + '&deg;';
    document.getElementById('humidity').innerHTML = "Humidity: " + d.main.humidity + '%';
}
  
window.onload = function() {
    showFiveDayForecast();
}

$("#searchForm").submit(showFiveDayForecast);
