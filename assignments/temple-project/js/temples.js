const requestJson = 'temples.json';

fetch(requestJson)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const temples = jsonObject['temples'];
        for (let i = 0; i < temples.length; i++) {
            if (temple[i].name == 'Las Vegas') {
                let card = document.createElement('section');
                let h3 = document.createElement('h3');
                let line = document.createElement('hr');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');

                h3.textContent = "Temple Closures";
                p1.textContent = temples[i].closures[0];
                p2.textContent = temples[i].closures[1];
                p3.textContent = temples[i].closures[2];
                p4.textContent = temples[i].closures[3];
                p5.textContent = temples[i].closures[4];
                p6.textContent = temples[i].closures[5];
                p7.textContent = temples[i].closures[6];
                p8.textContent = temples[i].closures[7];
                p9.textContent = temples[i].closures[8];
                p10.textContent = temples[i].closures[9];
                p11.textContent = temples[i].closures[10];

                card.appendChild(h3);
                card.appendChild(line);
                card.appendChild(p1);
                card.appendChild(p2);
                card.appendChild(p3);
                card.appendChild(p4);
                card.appendChild(p5);
                card.appendChild(p6);
                card.appendChild(p7);
                card.appendChild(p8);
                card.appendChild(p9);
                card.appendChild(p10);
                card.appendChild(p11);

                document.querySelector('#vegas-closures').appendChild(card);
            }
        }
    });