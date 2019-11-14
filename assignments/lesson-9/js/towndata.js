const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
       /* for (let i = [0]; i < towns.length; i++){
            
            let town = document.createElement('section');
            let h3 = document.createElement('h3');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let p4 = document.createElement('p');
            let image = document.createElement('img');


            h3.textContent = towns[i].name;
            p1.textContent = towns[i].motto;
            p2.textContent = "Average Rainfall: " + towns[i].averageRainfall;
            p3.textContent = "Population: " + towns[i].currentPopulation;
            p4.textContent = "Year Founded: " + towns[i].yearFounded;
            image.setAttribute('src', towns[i].photo);
            image.setAttribute('alt', towns[i].name + 'img');


            town.appendChild(h3);
            town.appendChild(p1);
            town.appendChild(p2);
            town.appendChild(p3);
            town.appendChild(p4);
            town.appendChild(image);

            document.querySelector('div.towndata').appendChild(town);*/

        }
    });