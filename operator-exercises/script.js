// First exercise
var bagel = 4.35;
console.log(bagel * 9);

// Second exercise
var scone = 0.6;
console.log(scone * 27);

// Third exercise
var totalMuffinCost = 3.80;
var numberOfMuffins = 13;
var muffinAnswer = totalMuffinCost / numberOfMuffins;
// Will round to 2 decimal point but will convert to a string
var roundedMuffinAnswer = muffinAnswer.toFixed(2)
// Will convert string back to a number
var convertedAnswer = Number(roundedMuffinAnswer);
console.log(convertedAnswer);

// Fourth Exercise
var money = 100;
// use Math.floor to round down to nearest integer
var howManyBagels = Math.floor(money / bagel);
console.log(howManyBagels);

// Fifth Exercise
// short handed to do the computation within the Math.floor method
console.log(Math.floor(money / scone));

// Sixth Exercise
var changeFromBagels = money % bagel;
console.log(changeFromBagels.toFixed(2));
// convert back to a number
var change = Number(changeFromBagels.toFixed(2));
console.log(change);

// Number of scones from the change
var sconesFromChange = Math.floor(change / scone);
console.log(sconesFromChange);







