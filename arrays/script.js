// Examples of arrays
var guests = ["Alice", "Charles", "Dave", "Bob"];
var scores =[10, 15, 12, 17, 3, 11, 23];
var bananas = [true, 0, "Today"];

// Output elements as a string
console.log(guests);//"Alice,Charles,Dave,Bob"
console.log(scores); // "10,15,12,17,3,11,23"

// Access elements by index
console.log(guests[0]);
console.log(guests[2]);

// Check length of an array with length property
console.log(scores.length);
for (var i = 0; i < scores.length; i += 1) {
    console.log(" Score #" + i + ": " + scores[i]);
}

// Create an array from a string with the split method
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
console.log(scores.length);

guests.push("Eliane", "Frodo");
console.log(guests);
console.log(guests.length);

// We can take elements of the end of an array using pop
var lastGuest = guests.pop();
console.log(guests);
console.log(guests.length);
console.log(lastGuest);

// We can also add and remove elements from the start of an array with shift and unshift
guests.unshift("Gollum", "Samwise", "Merry", "Pippin");
console.log(guests);
console.log(guests.length);
var unableToAttend = guests.shift();
console.log(unableToAttend);

// Splice to add elements
guests.splice(2, 0, "George", "Robert");
console.log(guests);
guests.splice(2, 2);
console.log(guests);

// sorting or reversing an array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);
fruits.reverse();
console.log(fruits);

// sort number ascending with a compare function
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log(points);

//descending numbers with a compare
points.sort(function(a, b){return b - a});
console.log(points);

// Random each time array is called upon
for (var i = numbers.length -1; i > 0; i --) {
    let j = Math.floor(Math.random() * (i+1));
    let k = numbers[i];
    numbers[i] = numbers[j];
    numbers[j] = k;
}
console.log(numbers);

// Objects inside array
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
];

// sort objects by year - numerical value
cars.sort(function(a,b){return a.year - b.year})
console.log(cars);

// sort objects by type alphabetically - strings
cars.sort(function(a, b){
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
});

console.log(cars);

// Exercises:

/*
    * Write a function that takes an array of elements and returns true if all the elements are strings.

    * Using an array of months and an array of days in each month, write a program that outputs each day of the year

    * Write a function that takes an array of numbers and returns a new array of each element squared i.e. 3 squared = 3² = 3 ✕ 3 = 9

    * Write a function that takes an array of string elements and sorts the array by length of string with longest strings coming first.

*/



