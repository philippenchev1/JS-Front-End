function solve() {
    // Initialize variables to store products and total price
    const cart = new Set();
    let totalPrice = 0;

    // Get all 'Add' buttons, the checkout button, and the textarea
    const addButtons = Array.from(document.getElementsByClassName('add-product'));
    const checkoutButton = document.querySelector('.checkout');
    const textarea = document.querySelector('textarea');

    // Attach event listeners to each 'Add' button
    addButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Get the product details from the DOM
            const productElement = event.target.parentElement.parentElement;
            const name = productElement.querySelector('.product-title').textContent;
            const price = parseFloat(productElement.querySelector('.product-line-price').textContent);

            // Add the product to the cart and update the total price
            cart.add(name);
            totalPrice += price;

            // Append the action to the textarea
            textarea.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
        });
    });

    // Attach an event listener to the checkout button
    checkoutButton.addEventListener('click', () => {
        // Create a comma-separated list of unique products
        const productList = Array.from(cart).join(', ');

        // Append the final message to the textarea
        textarea.value += `You bought ${productList} for ${totalPrice.toFixed(2)}.`;

        // Disable all buttons after checkout
        addButtons.forEach(button => button.disabled = true);
        checkoutButton.disabled = true;
    });
}
