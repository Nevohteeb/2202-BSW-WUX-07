// ternary operator
// condition ? trueExpression : falseExpression

// Score exmaple:

// const score = 80
// let scoreRating

// if (score > 70) {
//   scoreRating = "Excellent"
// } else {
//   scoreRating = "Do better"
// }

// console.log(scoreRating)
// // "Excellent"

// As a ternary:
const score = 80

const scoreRating =
  score > 70 ? "Excellent" : "Do better"

console.log(scoreRating)
// Excellent

// Using with functions:

function printPoor() {
    console.log("Poor result")
    return "poor"
}
  
function printSuccess() {
    console.log("Nice result")
    return "success"
}
    
const pass = true;
  
const result = pass ? printSuccess() : printPoor()
// Poor result (console.log executed)
  
console.log(result)
// poor

// https://www.freecodecamp.org/news/the-ternary-operator-in-javascript/