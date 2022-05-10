let searchForm = document.querySelectorAll("#search-form");
let searchInput = document.querySelectorAll("#search-input");
let overviewContainer = document.querySelectorAll(".overview-container");
let historyContainer = document.querySelectorAll(".search-history");
let fiveDayForecast = document.querySelectorAll(".five-day-forecast");
let city = searchInput.value

let formSubmitHandler = function (event) {
    let city = searchInput.value.trim();
  
    if (city) {
      showFiveDayForecast(city);
  
      fiveDayForecast.textContent = '';
      searchInput.value = '';
    } else {
      alert('Please enter a valid city name');
    }
  };

function showFiveDayForecast(city) {
    let key = 'fc4d1682ddb59485eb333396c62bf9ea';
    //console saying APIKey is invalid.
    let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + key
   
    fetch(apiUrl)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      console.log(data);
    })
    .catch(function() {
      // catch any errors
    });
}
  
window.onload = function() {
    let APIKey = "fc4d1682ddb59485eb333396c62bf9ea";
    showFiveDayForecast(APIKey);
  }



$(searchForm).submit(showFiveDayForecast);