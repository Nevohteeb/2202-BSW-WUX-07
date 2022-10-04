
var firstNumber = 8;
var secondNumber = 10;
var thirdNumber = 7;

firstNumber = 6;
console.log(firstNumber * secondNumber + thirdNumber);

var phonePrice = 1399.99;
var charger= 59.99;
var phoneCase = 39.99;
var numberOfCases = 2;
var extendedWarranty = phonePrice * 0.10;
var insurance = 12.50;
var months = 12;
var totalPrice = phonePrice + charger + (phoneCase * numberOfCases) + extendedWarranty + (insurance * months);

// Take to two decimal places but conver to string
var toFixedNumber = totalPrice.toFixed(2);
console.log(toFixedNumber);
// convert string back to number
var toFixedToNumber = Number(toFixedNumber);
console.log(toFixedToNumber);

// round down to the nearest integer
var roundedDownTotal = Math.floor(toFixedToNumber);
console.log(roundedDownTotal);

// round up to the nearest integer
var roundedUpTotal = Math.ceil(toFixedToNumber);
console.log(roundedUpTotal);
