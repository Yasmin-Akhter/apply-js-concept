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