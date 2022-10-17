// --------- ARRAYS -----------

// String Example
var guests = ["Alice", "Charles", "Dave", "Bob"];
// Number Example
var scores = [10, 15, 12, 17, 3, 11, 23];

// log out the arrays
console.log(guests);
console.log(scores);

//Access element by using its index
console.log(guests[2]);
console.log(scores[3]);

console.log(scores.length);
//Run a for loop over an array
for (var i = 0; i < scores.length; i += 1) {
    console.log("Match #" + (i + 1) + " goals = " + scores[i]);
}

// Create an array from a string with split method
var drivers = "Riccardo,Norris,Sainz,Verstappen,Russell,Leclerc".split(",");
console.log(drivers.length);
console.log(drivers);

// Create a string from an array with join
console.log(scores.join());
console.log(scores.join(""));
console.log(guests.join());
console.log(guests.join(""));

// We can modify an element in an array
guests[2] = "Steve";
console.log(guests);
scores[0] = 9;
console.log(scores);

// We can add elements to the end of an array with the push method
scores.push(11);
console.log(scores);

guests.push("Elaine", "Frodo");
console.log(guests);

// We can remove elements from the end of an array using pop
var lastGuest = guests.pop();
console.log(guests);
console.log(lastGuest);

// Add/Remove from start of array with shift and unshift
guests.unshift("Gollom", "Samwise", "Merryn", "Pippin");
console.log(guests);
var unableToAttend = guests.shift();
console.log(unableToAttend);

// Splice - add or remove from an array
// splice(index, howmanytoreomve, itemtoadd, itemadd2, ... )

// Add George and Robert at index # 2
guests.splice(2, 0, "George", "Robert");
console.log(guests);
// Remove George and Robert using splice
guests.splice(2, 2);
console.log(guests);

// Sort & Reverse - ***REMEMBER UNICODE****
// Numbers before Capitals, Capitals before lowercase
var fruits = ["Banana", "orange", "apple", "Mango"];
fruits.sort();
console.log(fruits);
fruits.reverse();
console.log(fruits);

// sort numbers
var points =[40, 100, 1, 5, 25, 10];
// points.sort();
// console.log(points);
points.sort(function(a, b){  // Ascending
    return a - b
});
console.log(points);

points.sort(function(a, b){return b - a}); //descending - one liner
console.log(points);

// Function generates a random order & numbers from the array each time its called 
for (var i = points.length -1; i > 0; i --) {
    var j = Math.floor(Math.random() * (i+1));
    var k = points[j];
    points[i] = points[j]
    points[j] = k;
}

console.log(points);

// Objects in an array
var cars = [
    {
        type: "Volvo",
        year: 2016
    },
    {
        type: "Saab",
        year: 2001
    },
    {
        type: "BMW",
        year: 2010
    }
]

console.log(cars[0].type);
// Sort by
cars.sort(function(a,b){return a.year - b.year});
console.log(cars);

// Sorts by type alphabetically
cars.sort(function(a, b){
    var x = a.type.toLowerCase();
    var y = b.type.toLowerCase();
    if (x < y) {return -1;};
    if (x > y) {return 1;};
    return 0;
})

console.log(cars);

function isAString(guests) {
    for (var i = 0; i < guests.length; i += 1) {
        if (typeof guests[i] !== "string") {
            return false;
        }
    }
    return true;
}

console.log(isAString(guests));


function displayMonths(months){
    for(var i = 0; i < months.length; i++){
        var month = months[i];
        for(var j = 0; j < month.noOfDays; j++){
            console.log((j + 1) + ' ' + month.month);
        }
    }
}

var months = [{
  month: 'January',
  noOfDays: 31
},{
  month: 'February',
  noOfDays: 28
}];
displayMonths(months);