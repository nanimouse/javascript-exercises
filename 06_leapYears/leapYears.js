const leapYears = function(year) {
    // let year = "";
    
    if (year % 400 === 0 ){
        return true;
    } else if (year % 4 === 0 && year % 100 !== 0){
        return true;
    } else {
        return false;
    }
};

leapYears();

// Do not edit below this line
module.exports = leapYears;


// npm test leapYears.spec.js


// if (year % 100 === 0 && year % 400 !== 0){
//     return false;
// } else if (year % 4 === 0){
//     return true;
// } //returns 1997 undefined

// if ( year % 400 == 0 ){
//     return true;
// } else if (year % 100 !== 0 && year % 4 == 0){
//     return true;
// } else {
//     return false;
// }

