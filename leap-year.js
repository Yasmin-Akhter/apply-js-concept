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


