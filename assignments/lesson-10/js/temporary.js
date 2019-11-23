 const forecastURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=f7d7618a1ee4178c8cbd23e4094b697c"

 fetch(forecastURL)
     .then((response) => response.json())
     .then((jsObject) => {
         console.log(jsObject);

         var wDay = 0;
         var imgCount = 0;
         var tempCount = 0;
         
         for (var i = 0; i < jsObject.list.length; i++) {
             var dateTime = jsObject.list[i].dt_txt;
             var time = dateTime.includes("18:00:00");
             if (time == true) {
                 wDay++;
                 imgCount++
                 tempCount++
                 var dayOfWeek = (new Date(dayTime).toLocaleString('en-us', {
                     weekday: 'long'}));
                 document.getElementById('firstDay' +wDay).textContent = dayOfWeek;


                 var imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
                 var desc = jsObject.list[i].weather[0].description;
                 document.getElementById('forecast-image' + imgCount).setAttribute('src', imagesrc);
                 document.getElementById('I' + imgCount).setAttribute('alt', desc);


                 var temp = Math.round(jsObject.list[i].main.temp);
                 document.getElementById('d' + temp + 'T').textContent = temp;

             } else {
                 continue;
             }


         }
     });