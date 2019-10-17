function announceFri() {
    var str = document.getElementById("currentDate").nodeValue;

    if (day == "Friday") {
        document.getElementById("announce").style.display = "block"
    }
    else {
        document.getElementById("announce").style.display = "none"
    }
}