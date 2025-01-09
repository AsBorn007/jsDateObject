const newDate = new Date();
document.getElementById("mainDate").innerHTML = newDate;
document.getElementById("DateObject").innerHTML = newDate.toUTCString();
document.getElementById("DateObjectString").innerHTML = newDate.toDateString();
document.getElementById("DateObjectUTCstring").innerHTML = newDate.toLocaleTimeString();


let newDateMathod = new Date ();
console.log(newDateMathod.toDateString())
console.log(newDateMathod.toLocaleString())