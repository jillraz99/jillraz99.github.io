const currentURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=b39d7e37ad7adddfe22206d8866ff4fb"

fetch(currentURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const tempF = jsObject.main.temp;
        const wSpeed = jsObject.wind.speed;
        const windChill = getWindChill(tempF, wSpeed);

        document.getElementById('current-cond').textContent = jsObject.weather[0].description;
        document.getElementById('humidity').textContent = Math.floor(jsObject.main.humidity);
        document.getElementById('temperature').textContent = Math.floor(jsObject.main.temp);
        document.getElementById('windspeed').textContent = Math.floor(jsObject.wind.speed);
        document.getElementById('chill').textContent = windChill.toFixed(0);

    });
