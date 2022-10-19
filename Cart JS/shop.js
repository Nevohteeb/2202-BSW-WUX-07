var merch = [{}]
var albums = [{}]

// Remove Buttons
// select all remove buttons with getElementByClass
var removeCartItemButtons = document.getElementsByClassName('btn-danger');
console.log(removeCartItemButtons); // shows how ClassName places into an array
// Loop thorugh and add event listeners to each remove button
for (var i=0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i];
    //event fucntions always return an event object which we can grab the target from
    // to do this we need to pass the event into the function:
    button.addEventListener('click', removeCartItem)
}
    
//Get All Quantity Inputs
var quantityInputs = document.getElementsByClassName('cart-quantity-input');
// Loop thorugh and add event listeners to each quantity input
for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    // add change event listener to run updateTotal on every cahnge to the input
    input.addEventListener('change', updateCartTotal)
}

var addToCartButtons = document.getElementsByClassName('shop-item-button');
for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];
    button.addEventListener('click', addToCartClicked)
} 


//Remove Items
function removeCartItem(event) {
    var buttonClicked = event.target
    //get cart-row - what we want to remove - of the button clicked on
    // first parent element is cart-quantity 
    // second parent element is the cart-row
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
}

// Get items from Shop item to add to cart
function addToCartClicked(event) {
    var button = event.target;
    // get information for each shop item
    var shopItem = button.parentElement.parentElement;
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;
    addItemToCart(title, price, imageSrc);
    updateCartTotal();
}

// Add Item to cart 
function addItemToCart(title, price, imageSrc) {
    // create new div element in the cart
    var cartRow = document.createElement('div');
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0];
    // perform check to see if item is already in cart or not
    var cartItemsNames = cartItems.getElementsByClassName('cart-item-title')// leave as array as we want to loop over it
    for (var i=0; i < cartItemsNames.length; i++) {
        if (cartItemsNames[i].innerText == title) {
            alert('Item is already in your cart. You can change the quantity to add another if you wish');
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1" min="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents;
    cartItems.appendChild(cartRow); 
    //Add event to new cart Item **EXPLAIN**
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', updateCartTotal);
}

//Update Total of the Cart
function updateCartTotal() {
    // This function goes through every single row in our cart
    // find the price
    // multiply that by the quantity
    // add that together for everyone of our rows  
    // then display in Total
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]; // get first cart-items - must be done due to it genertaing an array
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');
    // Set cart total to zero by default
    var total = 0;
    // loop over cart-rows
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart-price')[0];
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        var price = parseFloat(priceElement.innerText.replace('$', ''));
        var quantity = quantityElement.value;
        total = total + (price * quantity);            
    }
    total= Math.round(total * 100) / 100;
    document.getElementsByClassName('cart-total-price')[0].innerText = "$" + total;
}

