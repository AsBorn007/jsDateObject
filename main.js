const newDate = new Date();
document.getElementById("mainDate").innerHTML = newDate;
document.getElementById("DateObject").innerHTML = newDate.toUTCString();
document.getElementById("DateObjectString").innerHTML = newDate.toDateString();
document.getElementById("DateObjectUTCstring").innerHTML = newDate.toISOString();
