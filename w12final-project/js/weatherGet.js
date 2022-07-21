const projLat = 38.984722
const projLon = -77.113056
const getWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${projLat}&lon=${projLon}&units=imperial&appid=6a3d5f69ba51cabc60170ae98d64a69f`;
const getWeatherWeekURL =`https://api.openweathermap.org/data/2.5/forecast?lat=${projLat}&lon=${projLon}&units=imperial&cnt=3&appid=6a3d5f69ba51cabc60170ae98d64a69f`;

const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#iconWeather');
const captionFig = document.querySelector('figcaption');
const windSpeedAPI = document.querySelector('#windspeedMph');
const currentHumidity = document.querySelector('#currentHumidity');
const weatherAlert = document.querySelector('.weatherAlert');

const weather1Fig = document.querySelector('#iconWeather1');
const weather1Temp = document.querySelector('#temp1');
const weather1Desc = document.querySelector('#figcaption1');
const weather2Fig = document.querySelector('#iconWeather2');
const weather2Temp = document.querySelector('#temp2');
const weather2Desc = document.querySelector('#figcaption2');
const weather3Fig = document.querySelector('#iconWeather3');
const weather3Temp = document.querySelector('#temp3');
const weather3Desc = document.querySelector('#figcaption3');

fetch(getWeatherURL)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    weatherAlert.innerHTML = `<strong>${data.weather[0].main}</strong>`;
    currentTemp.innerHTML = `<strong>${data.main.temp.toFixed(0)}</strong>`;
    windSpeedAPI.innerHTML = `<strong>${data.wind.speed.toFixed(0)}`;
    currentHumidity.innerHTML = `<strong>${data.main.humidity}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);weatherIcon.setAttribute('alt', desc);
    captionFig.textContent = desc;
  });
fetch(getWeatherWeekURL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    weather1Temp.innerHTML = `<strong>${data.list[0].main.temp.toFixed(0)}</strong>`
    weather2Temp.innerHTML = `<strong>${data.list[1].main.temp.toFixed(0)}</strong>`
    weather3Temp.innerHTML = `<strong>${data.list[2].main.temp.toFixed(0)}</strong>`
    const iconsrc1 = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
    const desc1 = data.list[0].weather[0].description;
    weather1Fig.setAttribute('src', iconsrc1);weather1Fig.setAttribute('alt', desc1);
    weather1Desc.innerHTML = desc1;
    const iconsrc2 = `https://openweathermap.org/img/w/${data.list[1].weather[0].icon}.png`;
    const desc2 = data.list[1].weather[0].description;
    weather2Fig.setAttribute('src', iconsrc2);weather1Fig.setAttribute('alt', desc2);
    weather2Desc.innerHTML = desc2;
    const iconsrc3 = `https://openweathermap.org/img/w/${data.list[2].weather[0].icon}.png`;
    const desc3 = data.list[2].weather[0].description;
    weather3Fig.setAttribute('src', iconsrc3);weather1Fig.setAttribute('alt', desc3);
    weather3Desc.innerHTML = desc3;
  });