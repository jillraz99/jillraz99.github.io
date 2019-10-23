/*Input: Temperature and Wind Speed from computer.
     *Processing: Compute wind chill using temperature and wind speed.
     *Output: The wind chill factor in Fahrenheit.
     */
function doInputOutput() {
    var tempF = parseFloat(document.getElementById("temperature").value);
    var speed = parseFloat(document.getElementById("windspeed").value);
    var w = windChill(tempF, speed);
    document.getElementById('outputDiv').innerHTML = w;
}

//Compute and return the windchill factor with temperature
//and wind speed.
function windChill(t, s) {
    var f = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) +
        (0.4275 * t * Math.pow(s, 0.16));
    return f;
}
