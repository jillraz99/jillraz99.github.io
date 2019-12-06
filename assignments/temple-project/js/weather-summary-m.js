const currentURL = "https://api.openweathermap.org/data/2.5/weather?zip=83646&units=imperial&APPID=f7d7618a1ee4178c8cbd23e4094b697c"

fetch(currentURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        document.getElementById('current-cond').textContent = jsObject.weather[0].description;
        document.getElementById('humidity').textContent = Math.floor(jsObject.main.humidity);
        document.getElementById('temperature').textContent = Math.floor(jsObject.main.temp);
        document.getElementById('windspeed').textContent = Math.floor(jsObject.wind.speed);

    });