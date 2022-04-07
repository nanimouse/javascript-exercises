function removeFromArray (someArray, valuesToRemove){
  // use rest parameter to hold the values the test suite passes; ... allows it to hold unlimited values

  


}



/* create a function that takes an array & other arguments
 -- the arguments should be removed from the array
 -- array should be returned WITHOUT the arguments */





// function removeOneValue(array, valueToRemove) {
//     let changeArray = Array.from(array);
//     let indexArg = changeArray.indexOf(valueToRemove);
  
//   //we want to check to make such index
//   //of value to remove is 
//   //present in change array or not
//     if (changeArray.indexOf(valueToRemove) != -1) {
//       changeArray.splice(indexArg, 1);
//     }
  
//     return changeArray;
  
//   }
  
//   const removeFromArray = function (array, ...multArgs) {
  
//     let changeArray = Array.from(array);
//     //looping through all the arguments that is seen
//     //this handles off by one error
//     for (let argument of multArgs) {
//       changeArray = removeOneValue(changeArray, argument);
//     }
  
//     return changeArray;
//   }





//  const removeFromArray = (someArray, ...valuesToRemove) => {

//     let myArray = [];
//     let takeAway = myArray.findIndex((element) => element === valuesToRemove) ;

//     if (takeAway !== -1){
//         myArray.splice(takeAway, index)
//         return myArray;
//     }

//     //return myArray;

// }; 
//this function works on a single value but does not work for multiple values 

// the rest parameter adds those values to an array, it is *not* the array

// Do not edit below this line
// module.exports = removeFromArray;



// npm test removeFromArray.spec.js