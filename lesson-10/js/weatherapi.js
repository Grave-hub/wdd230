const weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=6a3d5f69ba51cabc60170ae98d64a69f"

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const fairbanksWind = document.querySelector('#fairbanksSpeed');
fetch(weatherURL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    currentTemp.innerHTML = `<strong>${data.main.temp.toFixed(0)}</strong>`;
    fairbanksWind.innerHTML = `<strong>${data.wind.speed}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
  });