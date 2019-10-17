function announceFri() {
    var date = new Date();
    var day = date.getDay();

    if (day == 4) {
        document.getElementById("announce").style.display = "block";
    }
    else {
        document.getElementById("announce").style.display = "none";
    }
}