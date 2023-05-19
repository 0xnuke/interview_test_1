function isDivisible(num) {
    // change num to string for use string method
    let numToString = num.toString();
    let answer = true;

    for (let i = 0; i < numToString.length; i++) {

        // check number is zero or not
        if (numToString[i] === '0') {
            answer = false;
            break;
        }

        // check that each digit is different
        for (let j = i + 1; j < numToString.length; j++) {
            if (numToString[i] === numToString[j]) {
                answer = false;
                break;
            }
        }

        //  Check divided by each digit
        if (num % parseInt(numToString[i]) !== 0) {
            answer = false;
        }
    }

    return answer;
}

isDivisible(12)