var searchForm = document.getElementById("search-form");
var searchInput = document.getElementById("search-input");
var overviewContainer = document.getElementById("overview-container");
var historyContainer = document.getElementById("search-history");
var fiveDayForecast = document.getElementById("five-day-forecast");
var searchButton = document.getElementById("search-button");
var city = searchInput



function currentForecast(event) {
    event.preventDefault();
    var APIkey = '63e195e07e4897eb45e421f76c43b1dd';
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${APIkey}`;

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

function getWeather () {
    currentForecast()
    
}

function drawWeather( d ) {
	var fahrenheight = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
	
    document.getElementById('location').innerHTML = "City: " + d.name;
	document.getElementById('description').innerHTML = d.weather[0].description;
	document.getElementById('temp').innerHTML = "Temp: " + fahrenheight + '&deg;';
    document.getElementById('humidity').innerHTML = "Humidity: " + d.main.humidity + '%';
}
var testButton = document.getElementById("test-button");

searchButton.addEventListener("click", currentForecast);

// window.onload = function() {
//     showFiveDayForecast();
// }

// create a click event where on the submit of the button, it runs the showFiveDayForecast function
// and saves the input value to the variable city before the function runs?
