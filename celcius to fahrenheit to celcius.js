// celcius to fahrenheit

function getCelcius(value) {
    const fahrenheit = (value * 9 / 5) + 32;
    return fahrenheit;

}
let fahrenValue = 37.7;
let celcius = getCelcius(fahrenValue);
console.log("the celcius value of", fahrenValue, "fahrenheit is", celcius);


// fahrenheit to celcius 

function getFahrenheit(value) {
    const cel = (value - 32) * 5 / 9;
    return cel;

}
let celciusValue = 100;
let fahren = getFahrenheit(celciusValue);
console.log("the fahrenheit value of", celciusValue, "fahrenheit is", fahren);