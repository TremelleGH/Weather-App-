const temp = document.getElementById('temperature')
const time = document.getElementById('time')
const weatherCode = document.getElementById('weathercode')
const windDirection = document.getElementById('winddirection')
const windSpeed = document.getElementById('windspeed')
let weather;




fetch('https://api.open-meteo.com/v1/forecast?latitude=40.72&longitude=-73.95&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&daily=weathercode,sunrise,sunset,precipitation_hours&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FNew_York')
.then(res => res.json())
.then(weatherObj => {
    console.log(weatherObj)
    showWeather(weatherObj);
    
    //console.log(weatherObj.current_weather.temperature) //87
    //temp.textContent = weatherObj.current_weather.temperature; //null ???


})


function showWeather(weatherObj) {
    weather = weatherObj;
    temp.textContent =  weatherObj.current_weather.temperature;
    time.textContent =  weatherObj.current_weather.time;
    weatherCode.textContent = weatherObj.current_weather.weathercode;
    windDirection.textContent = weatherObj.current_weather.winddirection;
    windSpeed.textContent = weatherObj.current_weather.windspeed;
}

