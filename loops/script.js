// var winner = "Red Bull";
// var outputCount = 5;

// while (outputCount > 0) {
//     outputCount -= 1;
//     console.log(winner + " loop count =" + outputCount);
// }

// INFINITE LOOP - DONT TRY THIS AT HOME!!!!
// while (true) {
//     console.log("Yo Toto, I’m really happy for you and Imma let you finish, but Red Bull is the best F1 team of all time. OF ALL TIME… — Kanye West");
// }

// // For Loop
// var number = 100;
// for (var i = 100; i > 1; i --) {
//    number = number - 1;
//    console.log(number);
// }

// alert("Welcome to the clubhouse")
// while (true) {
//     var password = prompt("...what is the password?");
//     if (password === "banana") {
//         break;
//     }
//     alert("Nope, try again");
// }
// alert( "You Know the password! Awesome!");

// Asterik Exercise Answer
function asteriskPrint(enteredString){
    var stringLength = enteredString.length;
    var asteriskString = '';

    for (i = 0; i < stringLength; i++){
        asteriskString += '*';
    }

    console.log(asteriskString);
}

// var enteredString = prompt('Please enter a word', 'Enter your word here');
// asteriskPrint(enteredString);

// Loop that counts to 100
for (var i = 0; i < 100; i +=1) {
    // console.log(i + 1);
}

// Answer 3 - 100 backwards
for (var i = 100; i >= 0; i -= 2) {
    console.log(i);
}


