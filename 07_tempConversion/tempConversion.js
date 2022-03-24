const ftoc = function(fahrenheit) {
  
  let celcius = (fahrenheit-32) * (5/9);

  if (celcius === 0){
    return celcius;
  } else {
    return +celcius.toFixed(1) ;
  }
  
  //(f-32)(5/9)
};

const ctof = function(celcius) {
   let fahrenheit = celcius*(9/5) + 32;

   if (fahrenheit === 0){
     return fahrenheit;
   } else {
     return +fahrenheit.toFixed(1);
   }
  //c(9/5)+32
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

// npm test tempConversion.spec.js

/* create two functions that convert celcius to fahrenheit & vice versa. make sure the program returns the temp to one decimal place (i.e.78.8) */

//remember that a function takes parameters. for these programs where we are being given variables to run, we MUST use the parameters