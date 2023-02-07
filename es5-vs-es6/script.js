// ----- SCOPING ------

// Es5 JS:

var counter = 5; // this would be a global variable

function sayName() {
    var name = "Ciaran"; // local varaible - not available outside of this function
    console.log(name);
}

sayName();

console.log(name); // does not work as "name" is a local variable and no global exists

// ES6 

const todoList = ["Milk", "Cow"]; // cannot be redefined

let newCounter = 10;

newCounter = 5;

console.log(counter);

//                      ***** IMPORTANT RULE OF THUMB:******
// Always use const unless the variable needs to be changed - then you can use let


// -- BLOCK SCOPING --

// Still have locl and global scoping but also have "block" scoping:

const list = [1,2,3,4,5]

for(let i=0; i < list.length; i ++) {
    console.log(i);
}

// console.log(i); // i is block scope via the let in the for loop - {} create a block

// using var from es 5 would let us do it tho:

for(var i=0; i < list.length; i ++) {
    console.log(i);
}

console.log(i); // var doesnt follow block scoping - we couldnt use i again



// ----- CONCATENATION -----

// ES 5
var name = "Bob"

console.log("Hello my name is " + name);

// ES6
const newName = "Ben"

const newAge = "25"

console.log(`Hello my name is ${newName} and I am ${newAge} years old`);



// -- OBJECT LITERALS --

// Es5:

// function showBook(title, author){
//     return {
//         title: title,
//         author: author
//     }
// }

// var book = showBook("Harry Potter", "JK Rowling");
// console.log(book);


// Es6:
function showBook(title, author){
    return {
        title,
        author
    }
}

var book = showBook("Harry Potter", "JK Rowling");
console.log(book);


// ----- OBJECT DECONSTRUCTION -----

// ES5:
var user = {
    name: "John",
    age: "65"
};

var myName = user.name;

console.log(myName);

//ES 6

const toBuy = {
    listname: 'Shopping List',
    items: ["Bread", "Coffee", "Eggs"]
}

const { listname, items} = toBuy; // pass what you want into the {}. Place where from after the =

console.log(listname, items);


// ----- ARROW FUNCTIONS -----

//Es5:

function printName() {
    console.log("Joel");
}

var printAge = function () {
    console.log('Nunya :)');
}

printName();
printAge();

// Es6:

// const sayLocation = (location) => {
//     console.log(`My location is ${location}`);
// };

// Can remove {} if only returning one thing
const sayLocation = (location) => console.log(`My location is ${location}`);

sayLocation('Wellington');

// ----- USING 'THIS' WITH ES6 ------

// ES5

var user = {
    name: "Timothy",
    age: 25,
    sayName: function () {
        console.log('My name is ' + this.name);
        var that = this; // allow us to pass down this into next function
        var fullName = function() {
            console.log('My name is ' + that.name + ' and my age is ' + that.age);
        }
        fullName();
    }
}

user.sayName();

// Es6:

const newuser = {
    name: "Edward",
    age: 35,
    sayName: function() {
        console.log(`My name is ${this.name}`);
        // arrow function is smart enough to know this is refering to the newsuer object
        const fullName = () => {
            console.log(`My name is ${this.name} and my age is ${this.age}`);
        };
        fullName();
    }
};

newuser.sayName();

// ----- SETTING DEFAULT PARAMETERS

// Es5:

function multiply(x,y) {
    var a = x || 1;
    var b = y || 1;
    console.log(a * b);
}

multiply();
multiply(10,20);

// Es6:

const add = (c = 1, d = 1) => {
    console.log(c + d);
}

add();

// ----- NEW ES6 ARRAY FUNCTIONS ----- 

const shoppingList = ['Milk', 'Bread', 'Eggs'];

// -- forEach --
// gives each element inside the array 
// can name each individual whatever you want inside - in the case its item
shoppingList.forEach(item => {
    console.log(item + " dont forget");
});

// can also call for the index as well eg:
shoppingList.forEach((item, index) => {
    console.log(`The index is ${index} and the item is ${item}`);
});

// -- Map --

// Get a copy of an array and modify it

const newList = shoppingList.map(item => {
    return item + " new";
});

// or in shorthand as theres only one return:
// const newList = shoppingList.map(item => item + " new");

console.log(newList);

// -- Filter --
// take an array and filter of certain items

const filterList = shoppingList.filter(item => {
    return item === 'Eggs';
});

const notEggs = shoppingList.filter(item => item !== 'Eggs');

// shorthand:
// const filterList = shoppingList.filter(item => item === 'Eggs');

console.log(filterList);

console.log(notEggs);