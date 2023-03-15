function formatDate(currentTime) {
  let hours = currentTime.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = currentTime.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let currentDay = days[currentTime.getDay()];

  let currentHours = currentTime.getHours();
  let currentMinutes = currentTime.getMinutes();

  return `${currentDay} ${currentHours}:${currentMinutes}`;
}

let newdate = document.querySelector("#newdate");
let currentTime = newDate();
newdate.innerHTML = formatDate(currentTime);

function showCityName(event) {
  event.preventDefault();
  let mainCity = document.querySelector("#maincity");
  let cityInput = document.querySelector("#input-search");
  mainCity.innerHTML = cityInput.value;
}

let cityname = document.querySelector("#cityinput");
cityname.addEventListener("submit", showCityName);

function showWeather(response) {
  let temp = document.querySelector("#temp");
  let temperature = Math.round(response.data.main.temp);
  temp.innerHTML = `${temperature}`;
}

function getCondition(response) {
  let info = document.querySelector("#condition");
  let infocondition = response.data.weather[0].main;
  info.innerHTML = `${infocondition}`;
}

function confirmPosition(event) {
  event.preventDefault();
  let apiKey = "52dc06c0c871b8c50be5fc4211d5cfd2";
  let city = document.querySelector("#input-search").value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(showWeather).then(getCondition);
}
