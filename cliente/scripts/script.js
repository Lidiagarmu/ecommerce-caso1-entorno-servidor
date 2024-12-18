// script.js

// Cargar preferencias guardadas desde localStorage
document.addEventListener('DOMContentLoaded', () => {
    loadPreferences();
    clearCart(); // Limpiar carrito al cargar la página

});

function loadPreferences() {
    const language = localStorage.getItem('language') || 'es';
    const theme = localStorage.getItem('theme') || 'light';

    document.getElementById('language').value = language;
    document.getElementById('theme').value = theme;

    document.body.classList.add(theme);
}

function setLanguagePreference() {
    const language = document.getElementById('language').value;
    localStorage.setItem('language', language);
    alert('Idioma cambiado a: ' + language);
}

function setThemePreference() {
    const theme = document.getElementById('theme').value;
    localStorage.setItem('theme', theme);
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
}

function addToCart() {
    const select = document.getElementById('product-select');
    const selectedOption = select.options[select.selectedIndex];
    const productName = selectedOption.text;

    const cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];

    // Añadir producto al carrito
    cartItems.push({ name: productName});

    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
    loadCart();
}

function loadCart() {
    const cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
    const cartContainer = document.getElementById('cart-items');

    cartContainer.innerHTML = '';
    cartItems.forEach(item => {
        const div = document.createElement('div');
        div.textContent = `${item.name}`;
        cartContainer.appendChild(div);
    });
}

function clearCart() {
    // Limpiar el carrito en sessionStorage
    sessionStorage.removeItem('cartItems');
}

