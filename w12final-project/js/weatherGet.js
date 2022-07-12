const projLat = 38.984722
const projLon = -77.113056
const getWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${projLat}&lon=${projLon}&units=imperial&appid=6a3d5f69ba51cabc60170ae98d64a69f`;

const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#iconWeather');
const captionFig = document.querySelector('figcaption');
const windSpeedAPI = document.querySelector('#windspeedMph')
const currentHumidity = document.querySelector('#currentHumidity')
const weatherAlert = document.querySelector('.weatherAlert')

fetch(getWeatherURL)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    weatherAlert.innerHTML = `<strong>${data.weather[0].main}</strong>`;
    currentTemp.innerHTML = `<strong>${data.main.temp.toFixed(0)}</strong>`;
    windSpeedAPI.innerHTML = `<strong>${data.wind.speed.toFixed(0)}`
    currentHumidity.innerHTML = `<strong>${data.main.humidity}</strong>`
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);weatherIcon.setAttribute('alt', desc);
    captionFig.textContent = desc;
  });