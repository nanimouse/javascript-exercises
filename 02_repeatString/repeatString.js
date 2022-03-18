const repeatString = (string, num) => {

    if (num < 0){
        return "ERROR";
    }
    
    let words = ''; //empty string to have place for return

    for (i=0; i < num; i++){ 
        words += string; // words = words + string

    }

    return words;
};


// Do not edit below this line
module.exports = repeatString;
