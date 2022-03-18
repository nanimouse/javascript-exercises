const reverseString = string => {
    let str = '';
    //use split method to separate characters and return new array
    let splitString = string.split("");

    //use reverse method for reversal
    let reverseIt = splitString.reverse();

    //use join to rejoin the characters
    let bringItBack = reverseIt.join("");

    return bringItBack;

};

// Do not edit below this line
module.exports = reverseString;


// npm test reverseString.spec.js