const newDate = new Date();
document.getElementById("mainDate").innerHTML = newDate;
document.getElementById("DateObject").innerHTML = newDate.toUTCString();
document.getElementById("DateObjectString").innerHTML = newDate.toDateString();
document.getElementById("DateObjectUTCstring").innerHTML = newDate.toLocaleTimeString();


let newDateMathod = new Date (2025 , 0 , 9);
console.log(newDateMathod.toDateString())
console.log(newDateMathod.toLocaleTimeString())


let milisecons = Date.now();
console.log(milisecons)

let seconds =  Date.now();
let findSecons = Math.floor(seconds/1000);
console.log(findSecons)