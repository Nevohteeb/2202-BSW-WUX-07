//Set Order total to nothing as default
document.getElementById("orderTotal").innerHTML = "";

// Price
var lattePrice = 4.50;
document.getElementById("lattePrice").innerHTML = "$" + lattePrice.toFixed(2);

// Quantity
var latteQuantity = 0; // set the default quantity to zero
document.getElementById("latteQuantity").innerHTML = "";

// Get Elements
var latteAdd = document.getElementById("latteAdd");
var latteMinus = document.getElementById("latteMinus");

// Add on click functions - add & minus buttons
latteAdd.onclick = function() {
    latteQuantity++;
    document.getElementById("latteQuantity").innerHTML = "x " + latteQuantity;
    outputTotal(latteQuantity);
}

latteMinus.onclick = function() {
    if (latteQuantity > 1) {
        latteQuantity--;
        document.getElementById("latteQuantity").innerHTML = "x " + latteQuantity;
        outputTotal(latteQuantity);
    } else if (latteQuantity === 1) {
        latteQuantity = 0;
        document.getElementById("latteQuantity").innerHTML = "";
        document.getElementById("orderTotal").innerHTML = "";
    }
}
// Populate new data
// Computation for the total

var pricePerCoffee = lattePrice;
var gst = 1.15;

function calculateCoffeeTotal(quantity) {
    return (quantity * pricePerCoffee) * gst;
}

function outputCoffeePrice (price, quantity, total) {
    return quantity + " coffees at $" + price + " each comes to $" + total + " including GST";
}

function outputTotal(quantity) {
    var coffeeQuantity = quantity;
    var totalPrice = calculateCoffeeTotal(coffeeQuantity);
    outputCoffeePrice (pricePerCoffee, coffeeQuantity, totalPrice);
    // Change order total to calculated ammount
    document.getElementById("orderTotal").innerHTML = outputCoffeePrice (pricePerCoffee.toFixed(2), coffeeQuantity, totalPrice.toFixed(2));
}

function orderTotal() {
    
}

