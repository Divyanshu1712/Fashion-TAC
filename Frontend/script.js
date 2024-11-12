// -------------------- scripts.js --------------------
document.addEventListener('DOMContentLoaded', () => {
    
    // -------------------- Add to Cart and Subscribe Notification --------------------
    const addToCartButtons = document.querySelectorAll('.product__add-button');
    const subscribeForm = document.querySelector('.footer__form');
    const emailInput = subscribeForm.querySelector('.footer__input');
    const notification = document.getElementById('notification');

    // Function to show notifications
    function showNotification(message, type) {
        notification.textContent = message;
        notification.style.backgroundColor = type === 'success' ? '#28a745' : '#e74c3c'; // Green for success, red for error
        notification.classList.add('show');

        // Hide after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }

    // Add to Cart Button Event Listeners
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            showNotification('Item added to cart!', 'success');
        });
    });

    // Subscribe Form Event Listener
    subscribeForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission

        const email = emailInput.value.trim();

        if (validateEmail(email)) {
            showNotification('Thank you for subscribing!', 'success');
            emailInput.value = ''; // Clear input field
        } else {
            showNotification('Please enter a valid email address.', 'error');
        }
    });

    // Simple Email Validation Function
    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }  
    
    // Scroll to Products section when Shop Now button is clicked
    document.getElementById('shop-now-btn').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('products-section').scrollIntoView({ behavior: 'smooth' });
    });

    // Scroll to Products section when Hero's Shop Now button is clicked
    document.getElementById('hero-shop-now-btn').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('products-section').scrollIntoView({ behavior: 'smooth' });
    });

    // Scroll to Footer section when Contact button is clicked
    document.getElementById('contact-link').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('footer-section').scrollIntoView({ behavior: 'smooth' });
    });

});
// Cart functionality - Add to Cart
const addButtons = document.querySelectorAll('product__add-button btn btn-primary');
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

// // Show notification
// function showNotification(message) {
//     notification.textContent = message;
//     notification.classList.add('show');
//     setTimeout(() => {
//         notification.classList.remove('show');
//     }, 3000);
// }
