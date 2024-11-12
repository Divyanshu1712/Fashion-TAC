// Cart functionality - Add to Cart
const addButtons = document.querySelectorAll('.product__add-button');
const notification = document.getElementById('notification');

let cart = JSON.parse(localStorage.getItem('cart')) || [];

addButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const productName = button.previousElementSibling.previousElementSibling.textContent;
        const productPrice = button.previousElementSibling.textContent;
        const productImage = button.previousElementSibling.previousElementSibling.previousElementSibling.src;

        const product = {
            name: productName,
            price: productPrice,
            image: productImage,
        };

        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        showNotification(`${productName} added to cart!`);
    });
});

// Show notification
function showNotification(message) {
    notification.textContent = message;
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}
