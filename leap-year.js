// checking leap year

function isLeapYear(year) {
    if ((year % 4 == 0) && (year % 100 !== 0) || (year % 400 == 0)) {
        return true;
    }
    else {
        return false;
    }
}
let myYear = 2000;
const ismyYear = isLeapYear(myYear)
console.log("Is my year", myYear, "is a leap year?", ismyYear);


// checking even or odd number

function chkNumber(number) {
    if (number % 2 == 0) {
        return "even";
    }
    else {
        return "odd";
    }
}

let myNumber = 34563;
const result = chkNumber(myNumber);
console.log("is", myNumber, "even or odd?", result);