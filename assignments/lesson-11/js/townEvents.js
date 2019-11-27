const getURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(getURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.log(jsonObject.towns[4].events[0]);
        
            document.getElementById('pres-events').textContent = jsonObject.towns[4].events[0];
            document.getElementById('fish-events').textContent = jsonObject.towns[4].events[0];
            document.getElementById('soda-events').textContent = jsonObject.towns[4].events[0];
        

    });