var searchForm = document.getElementById("search-form");
var searchInput = document.getElementById("search-input");
var overviewContainer = document.getElementById("overview-container");
var historyContainer = document.getElementById("search-history");
var fiveDayForecast = document.getElementById("five-day-forecast");
var searchButton = document.getElementById("search-button");
var city = searchInput
var APIkey = '63e195e07e4897eb45e421f76c43b1dd';

function displayDate() {
  $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm:ss a'));
}
setInterval(displayDate, 100);



function currentForecast(event) {
    var apiUrl1 = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${APIkey}`;
    var apiUrl2 = `https://api.openweathermap.org/data/2.5/forecast?q=${city.value}&appid=${APIkey}`;

    fetch(apiUrl1)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      drawCurrentForecast(data);
      drawFiveDayForecast(data);
      drawSearchHistory(data)
      console.log(apiUrl1);
      console.log(apiUrl2);
      console.log(city.value)
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
      drawFiveDayForecast(data);
      
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
	  document.getElementById('wind').innerHTML = "Wind Speed: " + d.wind.speed + " MPH";
	  document.getElementById('temp').innerHTML = "Temp: " + fahrenheight + '&deg;';
    document.getElementById('humidity').innerHTML = "Humidity: " + d.main.humidity + '%';
}

function drawFiveDayForecast( d ) {
    //copy of above function which needs to be changed so the Five Day Forecast is displayed
    // on the Five Day Forecast section. 

	var fahrenheight = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
	
    document.getElementById('d1-temp').innerHTML = "Temp: " + fahrenheight + "&deg;"; 
	  document.getElementById('d1-wind').innerHTML =   "Wind Speed: " + d.wind .speed + " MPH";
	  document.getElementById('d1-humidity').innerHTML = "Humidity: " + d.main.humidity + "%";
    document.getElementById('d2-temp').innerHTML = "Temp: " + "&deg;"; 
	  document.getElementById('d2-wind').innerHTML =   "Wind Speed: " + " MPH";
	  document.getElementById('d2-humidity').innerHTML = "Humidity: " + "%";
    document.getElementById('d3-temp').innerHTML = "Temp: " + "&deg;"; 
	  document.getElementById('d3-wind').innerHTML =   "Wind Speed: " + " MPH";
	  document.getElementById('d3-humidity').innerHTML = "Humidity: " + "%";
    document.getElementById('d4-temp').innerHTML = "Temp: " + "&deg;"; 
	  document.getElementById('d4-wind').innerHTML =   "Wind Speed: " + " MPH";
	  document.getElementById('d4-humidity').innerHTML = "Humidity: " + "%";
    document.getElementById('d5-temp').innerHTML = "Temp: " + "&deg;"; 
	  document.getElementById('d5-wind').innerHTML =   "Wind Speed: " + " MPH";
	  document.getElementById('d5-humidity').innerHTML = "Humidity: " + "%";
    
}

function drawSearchHistory(d) {

  let content = city.value
  let searchHistory = $(this).children(".search-history").attr("class");

  localStorage.setItem(content, searchHistory)

  for (i = 0; i <= content.length; i++){
    if (content.length = 0) {
      document.getElementById("search-history1").innerHTML = "-" + city.value;
      localStorage.setItem(content, searchHistory)
    }
    if (content.length = 1) {
      $("#search-history1").val(localStorage.getItem("search-history1"));
      document.getElementById("search-history2").innerHTML = "-" + city.value;
    }
  }  
}

$("#search-history1").val(localStorage.getItem("search-history1"));

searchButton.addEventListener("click", getWeather);

// window.onload = function() {
//     showFiveDayForecast();
// }

// create a click event where on the submit of the button, it runs the showFiveDayForecast function
// and saves the input value to the variable city before the function runs?
