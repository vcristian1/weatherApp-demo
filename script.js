var searchForm = document.getElementById("search-form");
var searchInput = document.getElementById("search-input");
var overviewContainer = document.getElementById("overview-container");
var historyContainer = document.getElementById("search-history");
var fiveDayForecast = document.getElementById("five-day-forecast");
var searchButton = document.getElementById("search-button");
var city = searchInput
var APIkey = '63e195e07e4897eb45e421f76c43b1dd';



function currentForecast(event) {
    var apiUrl1 = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${APIkey}`;

    fetch(apiUrl1)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      drawCurrentForecast(data);
      drawFiveDayForecast(data);
      console.log(apiUrl1)
    })
    .catch(function() {
      // catch any errors
    });
}

function fiveDayForecast () {
    var apiUrl2 = `https://api.openweathermap.org/data/2.5/forecast?q=${city.value}&appid=${APIkey}`;

    fetch(apiUrl2)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      drawFiveDayWeather(data);
      console.log(apiUrl2)
    })
    .catch(function() {
      // catch any errors
    });
}


function getWeather (event) {
    event.preventDefault();
    currentForecast()
   
}


function drawCurrentForecast( d ) {
	var fahrenheight = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
	
    document.getElementById('location').innerHTML = "City: " + d.name;
	document.getElementById('description').innerHTML = d.weather[0].description;
	document.getElementById('temp').innerHTML = "Temp: " + fahrenheight + '&deg;';
    document.getElementById('humidity').innerHTML = "Humidity: " + d.main.humidity + '%';
}

function drawFiveDayForecast( d ) {
    //copy of above function which needs to be changed so the Five Day Forecast is displayed
    // on the Five Day Forecast section. 

	var fahrenheight = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
	
    document.getElementById('DayOne').innerHTML = "Hello"
	document.getElementById('DayTwo').innerHTML = "Hello"
	document.getElementById('DayThree').innerHTML = "Hello"
    document.getElementById('DayFour').innerHTML = "Hello"
    document.getElementById('DayFive').innerHTML ="Hello"
}


searchButton.addEventListener("click", getWeather);

// window.onload = function() {
//     showFiveDayForecast();
// }

// create a click event where on the submit of the button, it runs the showFiveDayForecast function
// and saves the input value to the variable city before the function runs?
