const newDate = new Date();
document.getElementById("mainDate").innerHTML = newDate;
document.getElementById("DateObject").innerHTML = newDate.toUTCString();
document.getElementById("DateObjectString").innerHTML = newDate.toDateString();
document.getElementById("DateObjectUTCstring").innerHTML = newDate.toLocaleTimeString();


let newDateMathod = new Date (2025 , 0 , 9);
console.log(newDateMathod.toDateString())
console.log(newDateMathod.toLocaleTimeString())

// this give use miliseconds
let milisecons = Date.now();
console.log(milisecons)

// to find the seconds 
let seconds =  Date.now();
let findSecons = Math.floor(seconds/1000);
console.log(findSecons)

// to find specific month
let findMonth =  new Date();
console.log(findMonth.getMonth())

// to find specific year
let findYear=  new Date();
console.log(findYear.getFullYear())

// to find specific Date
let findDate=  new Date();
console.log(findDate.getDate())


// to find specific Day give its index value
let findDay=  new Date();
console.log(findDay.getDay())

// to find specific DayName
const finddDay=  new Date();
let dayName = finddDay.toLocaleString('en-US', { weekday: 'long' });
console.log(dayName);

// find full Day Name short name and narrow name
let findFullDayName = new Date();
console.log(findFullDayName.toLocaleString('en-US', { weekday: 'long' }));   // Full day name (e.g., "Monday")
console.log(findFullDayName.toLocaleString('en-US', { weekday: 'short' }));  // Abbreviated day name (e.g., "Mon")
console.log(findFullDayName.toLocaleString('en-US', { weekday: 'narrow' })); // Narrow day name (e.g., "M")
