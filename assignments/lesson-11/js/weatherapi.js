const currentURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=f7d7618a1ee4178c8cbd23e4094b697c";


fetch(currentURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        document.getElementById('temperature').innerHTML = jsObject.main.temp.toFixed(0);
        document.getElementById('current-cond').innerHTML = jsObject.weather[0].main;
        document.getElementById('humidity')
            .innerHTML = jsObject.main.humidity;
        document.getElementById('windspeed').innerHTML = jsObject.wind.speed.toFixed(0);


    });