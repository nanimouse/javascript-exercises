function sumAll(a, b) {
    let sum = 0;
    // 0 works as opposed to "" because this is a math problem. the quotes turn the numbers into a string

    if (a < 0 || b < 0){
        return "ERROR";
    } else if (a < b) {
        for (i = a; i <= b; i++) {
            sum += i;   
        }

        return sum;
    } else if (b < a){
        for (i = b; i <= a; i++) {
            sum += i;
        }

        return sum;
    } else if (typeof b !== 'number' ){
        return "ERROR";
    }
}

sumAll();

// Do not edit below this line
module.exports = sumAll;


// npm test sumAll.spec.js