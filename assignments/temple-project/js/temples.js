const requestJson = 'https://jillraz99.github.io/assignments/temple-project/temples.json';

fetch(requestJson)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.log(jsonObject);

        const temples = jsonObject['temples'];
        for (let i = 0; i < temples.length; i++) {
            if (temples[i].name == 'Las Vegas') {

                let card = document.createElement('section');
                let h2 = document.createElement('h2');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                let p4 = document.createElement('p');
                let p5 = document.createElement('p');
                let p6 = document.createElement('p');
                let p7 = document.createElement('p');
                let p8 = document.createElement('p');
                let p9 = document.createElement('p');
                let p10 = document.createElement('p');
                let p11 = document.createElement('p');

                h2.textContent = "Temple Closures";
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

                card.appendChild(h2);
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

                document.querySelector('div.closures').appendChild(card);
            }
        }
    });