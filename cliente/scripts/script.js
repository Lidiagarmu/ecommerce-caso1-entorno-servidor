// Cargar preferencias guardadas desde localStorage
document.addEventListener('DOMContentLoaded', () => {
    loadPreferences();
    loadCart(); // Cargar carrito al inicio
});

// Función para manejar las preferencias de idioma y tema
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

// Función para añadir productos al carrito
function addToCart(event) {
    event.preventDefault();  // Prevenir que el formulario se envíe y recargue la página

    const select = document.getElementById('product-select');
    const selectedOption = select.options[select.selectedIndex];
    const productName = selectedOption.text;
    const productPrice = selectedOption.getAttribute('data-price');

    // Obtener los artículos del carrito guardados en sessionStorage
    const cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];

    // Añadir el producto al carrito
    cartItems.push({ name: productName, price: productPrice });

    // Guardar los productos en sessionStorage
    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Recargar el carrito después de añadir el producto
    loadCart();
}

// Función para cargar el carrito
function loadCart() {
    const cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
  
    const cartContainer = document.getElementById('cart-items');

    // Limpiar el contenido del carrito antes de cargar los nuevos productos
    cartContainer.innerHTML = '';

    // Si hay productos en el carrito, mostrarlos
    if (cartItems.length > 0) {
        cartItems.forEach(item => {
            const div = document.createElement('div');
            div.textContent = `${item.name} - ${item.price}€`;
            cartContainer.appendChild(div);
        });
    } else {
        // Si el carrito está vacío, mostrar un mensaje
        const emptyMessage = document.createElement('div');
        emptyMessage.textContent = "Tu carrito está vacío.";
        cartContainer.appendChild(emptyMessage);
    }
}

// Función para limpiar el carrito (opcional)
function clearCart() {
    // Limpiar el carrito de sessionStorage
    sessionStorage.removeItem('cartItems');
    loadCart();  // Actualizar la vista del carrito
}
