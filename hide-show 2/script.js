console.log('Hi from the console!');

const burger = 10.00;
const bacon = 3.5;
const avacado = 2.00;

const burgerTotal = burger + bacon + avacado;

const totalPrice = document.getElementById('result');

// Onlclick on total butoon that shows burgertotal when I click it

// function to show burger total
function burgerShowTotal() {
    totalPrice.innerHTML = `<h2>${burgerTotal}</h2>`;
}

// Click event event to show total
document.getElementById('totalClick').addEventListener("click", burgerShowTotal);

// function to toggle colour between red and blue
function changeColorToggle() {
    const colorDiv = document.getElementById('changeDiv');
    colorDiv.classList.toggle('blue');
}

// Click event for the toggle
document.getElementById('changeColour').addEventListener("click", changeColorToggle);

// Hide/show function
function hideDiv() {
    const colorDiv = document.getElementById('changeDiv');
    colorDiv.classList.toggle('hide'); 
}

// Click Event for the hide/show
document.getElementById('hideShow').addEventListener("click", hideDiv)

//Adding border function
function addBorder() {
    const colorDiv = document.getElementById('changeDiv');
    colorDiv.classList.add('border'); 
}

//Click Event to add border
document.getElementById('addBtn').addEventListener("click", addBorder);

//Remove the Border
function closeBorder() {
    const colorDiv = document.getElementById('changeDiv');
    colorDiv.classList.remove('border'); 
}

//Click Event to add border
document.getElementById('removeBtn').addEventListener("click", closeBorder);

console.log(burgerTotal);