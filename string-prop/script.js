//Length Property 
// console.log("Word".length); // 4 characters
// var username = "Chell";
// console.log(username.length);

// Use length to check the length of username prompt
// do {
//     var username = prompt("what is your name?");
//     if (username.length <2) {
//         alert("Names have more than 1 character. Try again");
//     } 
// } while (username.length <2)

// String transformation methods
var message = "This text will be transformed";
console.log(message);
console.log(message.toLowerCase());
console.log(message.toUpperCase());

// trim()
var spaceMovies = "      Star Trek, Star Wars, Galaxy Quest,Spaceballs         ";
console.log(spaceMovies);
console.log(spaceMovies.trim());

// Set Interval & New Date
function test() {
    var d = new Date();
    console.log(d);
}

// setInterval(test, 2000);

function policeLights() {
    var redbox = document.querySelector(".lights");
    redbox.classList.toggle('blue');
}

setInterval(policeLights, 500);