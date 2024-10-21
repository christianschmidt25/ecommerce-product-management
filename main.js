// Task 1: Setup Product HTML Structure
// This task requires a creation of an HTML page that connects with this JS file.

// See index.html for my HTML site with the appropriate structure.

// Task 2 & 3: Add Event Listeners for Product Selection & Handle Stock Availability
// We will now add event listeners for the size dropdown, which will update the price based on the size selected.
// This task also merged the 2nd and 3rd tasks, modifying the stock availability in the same task.

const priceElement = document.getElementById("product-price"); //product-price in HTML is now known as priceElement here
const sizeSelector = document.getElementById("size-selector"); //size-selector in HTML is now known as sizeSelector here



const purchaseButton = document.getElementById("purchase-button"); //purchase-button in HTML is now known as purchaseButton here

function updatePurchaseButton() {
    const selectedOption = sizeSelector.options[sizeSelector.selectedIndex]; 
    const stockStatus = selectedOption.getAttribute('data-stock'); //data stock in HTML has in stock or out of stock, and the purchase button will be accessible or disabled due to whichever one it is.

    if (stockStatus === 'out-of-stock') {
        purchaseButton.disabled = true;
    } else {
        purchaseButton.disabled = false;
    }
}

sizeSelector.addEventListener("change", (event) => { //when the option in sizeSelector is changed, it will update the selected price at the top of the screen.
    const selectedPrice = event.target.value;
    priceElement.textContent = `$${selectedPrice}`
})

sizeSelector.addEventListener("change", updatePurchaseButton); 

updatePurchaseButton();

// Task 4: Create a Checkout Event
// We will now make the purchase button effective and create an alert when a purchase is made.

purchaseButton.addEventListener("click", (event) => {
    alert('Your purchase has been completed!');
}) 