// alert("Hi Team!");
// confirm("do you want to delete?");
// prompt("whats your name?")


// Get value form a Confirm button

// function confirmExample() {
//     var confirmCheck = confirm ("do you want to delete?");
//     if (confirmCheck == true) {
//         console.log("deleted")
//     } else {
//         console.log("delete was canceled")
//     }
// }

// confirmExample();

// Prompt Example

// function promptExample() {
//     var promptCheck = prompt ("Who is the best F1 Team currently?", "Red Bull");
//     if (promptCheck.toLowerCase() === "red bull") {
//         alert("you know it!");
//     } else {
//         alert("Hahaha you wish!");
//     }
// }

// promptExample();

// function hello(person) {
//     person = person || "world";
//     console.log("Hello, " + person + "!" );
// }

// hello("David"); // logs "Hello, David!"
// hello(); // logs "Hello, world!"



// Coffee Example
var coffeeQuantity = 3;
var pricePerCoffee = 3.60;
var totalPrice = coffeeQuantity * pricePerCoffee;
console.log(coffeeQuantity + " coffees at $" + pricePerCoffee + " each comes to $" + totalPrice);

// What if we want to calculate two or more orders? 
// Yes would could just dulpicate the function and reassign values:
coffeeQuantity = 5;
pricePerCoffee = 4.80;
totalPrice = coffeeQuantity * pricePerCoffee;
console.log(coffeeQuantity + " coffees at $" + pricePerCoffee + " each comes to $" + totalPrice);

// The issue here is code dulpication. Every new order we want to computate is requiring an additional
// 4 lines of code.

// Our better option is to practice D.R.Y - Don't Repeat Yourself || Duplication is Evil

//Create a function that calculates the total

var pricePerCoffee = 3.6;
var gst = 1.15;

function calculateCofeeTotal (quantity) {
    return (quantity * pricePerCoffee) * gst;
}

// Example of passing quantity number into calculateCoffeeTotal and output to HTML


function outputCoffeePrice (price, quantity, total) {
    return quantity + " coffees at $" + price + " each comes to $" + total;
}

var coffeeQuantity = 5;
var totalPrice = calculateCofeeTotal(coffeeQuantity);
outputCoffeePrice(pricePerCoffee, coffeeQuantity, totalPrice);
document.getElementById("result").innerHTML = outputCoffeePrice(pricePerCoffee, coffeeQuantity, totalPrice);

// price in outputCoffePrice function delcaration above becomes pricePerCoffee 
// quantity in outputCoffePrice function delcaration above becomes coffeeQuantity
// total in outputCoffePrice function delcaration above becomes totalPrice 

