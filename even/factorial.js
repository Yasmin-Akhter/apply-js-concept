// factorial value of 7

var fact = 1;
for (var i = 1; i <= 7; i++) {
    fact = fact * i;
}
console.log(fact)



// factorial value of 6 using function

function factorial(num) {
    var fact = 1;
    for (var i = 1; i <= num; i++) {
        fact = fact * i;
    }
    return fact;
}
factorial(6);
console.log(factorial(6));

