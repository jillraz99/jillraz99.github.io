const requestJson = 'https://jillraz99.github.io/assignments/temple-project/temples.json';

fetch(requestJson)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.log(jsonObject);

        const temples = jsonObject['temples'];
        for (let i = 0; i < temples.length; i++) {
            let p1 = document.createElement('p');
                
            p1.textContent = temples[i].closures[0];
             card.appendChild(p1);
           
            document.querySelector('div.closures').appendChild(card);
        }
    }
         );