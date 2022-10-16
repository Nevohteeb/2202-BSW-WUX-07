var terror = "Madison";
console.log(terror.charAt(1));

console.log(terror.length);

for (var i = 0; i < terror.length; i += 1) {
    console.log(terror.charAt(i));
}

console.log(terror.charAt(-1));
console.log(terror.charAt(8));

// -------- SUBSTR EXAMPLE ---------- //
var username = "BestGamerEver";
console.log(username.substr(5, 4));
console.log(username.substr(-3));
console.log(username.substr(-3,2));

for (var i=0; i < username.length; i += 1) {
    console.log(username.substr(i, 3));
}

// --------- SUBSTRING EXAMPLES -------- // 
var sweet = "Caroline";
console.log(sweet.substring(3,4));
console.log(sweet.substring(5));
console.log(sweet.substring(-3, 2));


// ----- SLICE EXAMPLES ------- //
var champion = "Verstappen";
console.log(champion.slice(0,3));
console.log(champion.slice(-4));
console.log(champion.slice(-5, -1));

// ------ INDEXOF EXAMPLES ------ //
var boat = "HMS Surly Bracket";
console.log(boat.indexOf("HMS"));
console.log(boat.indexOf("Surly"));
console.log(boat.indexOf("whale"));
// ------- LASTINDEXOF ------ //
console.log(boat.lastIndexOf("HMS"));
console.log(boat.lastIndexOf("Surly"));
console.log(boat.lastIndexOf("r"));

// find all occurances of the letter "r" in a string
// output the index# of each instances
var pirate ="Arr! Shiver me timbers and Raise the anchor";
pirate = pirate.toLowerCase();
var i=0;
while (pirate.indexOf("r", i) > -1) {
    console.log(pirate.indexOf("r", i));
    i = pirate.indexOf("r",i) + 1;
}