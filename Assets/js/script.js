const timeE1 = document.getElementById('time');
const dateE1 = document.getElementById('date');
const currentWeatherItemsE1 = document.getElementById('current-weather-items';
const timezone = document.getElementById('time-zone');
const weatherForecastE1 = document.getElementById('weather-forecast');
const currentTempE1 = document.getElementById('current-temp');

setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDate();
    const hour = time.getHours();
    const hoursin12HrFormat = hour >=13 ? hour %: hour;
    const seconds = time.getSeconds();
    const ampm = hour >=12 ? 'PM' : 'AM'

    timeE1.innerHTML = hoursin12HrFormat + ':' minutes '' + <span id="am-pm">PM</span>
}, 1000);