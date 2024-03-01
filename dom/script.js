document.addEventListener('DOMContentLoaded', function() {
    const decrementButtons = document.querySelectorAll('.decrement');
    const incrementButtons = document.querySelectorAll('.increment');
    const removeButtons = document.querySelectorAll('.remove-button');
    const likeButtons = document.querySelectorAll('.like-button');
    const totalPriceElement = document.querySelector('#total-price span');

    function updateTotalPrice() {
        const priceElements = document.querySelectorAll('.price');
        let totalPrice = 0;
        priceElements.forEach(priceElement => {
            totalPrice += parseFloat(priceElement.textContent);
        });
        totalPriceElement.textContent = totalPrice.toFixed(2);
    }

    decrementButtons.forEach(button => {
        button.addEventListener('click', () => {
            const quantityElement = button.nextElementSibling;
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
                updateTotalPrice();
            }
        });
    });

    incrementButtons.forEach(button => {
        button.addEventListener('click', () => {
            const quantityElement = button.previousElementSibling;
            let quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
            updateTotalPrice();
        });
    });

    removeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const item = button.parentElement;
            item.remove();
            updateTotalPrice();
        });
    });

    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('liked');
        });
    });
});
