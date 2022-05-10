let searchForm = document.querySelectorAll("#search-form");
let searchInput = document.querySelectorAll("#search-input");
let overviewContainer = document.querySelectorAll(".overview-container");
let historyContainer = document.querySelectorAll(".search-history");
let fiveDayForecast = document.querySelectorAll(".five-day-forecast");
let APIKey = "1644f4ee3b0c47f3bf57fd902100edcc";
let APICall = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + ${APIkey}
  

searchForm.addEventListener('submit', formSubmitHandler);