<?php
// dashboard.php
session_start();
if (!isset($_SESSION['user'])) {
    header("Location: index.php");
    exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['logout'])) {
    session_destroy();
    header("Location: index.php");
    exit();
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link rel="stylesheet" href="../cliente/styles/style.css">
</head>
<body>
    <div id="app" class="app-container">
        <header>
            <h1>Bienvenido, <?php echo $_SESSION['user']; ?></h1>
            <form method="POST">
                <button name="logout">Cerrar sesión</button>
            </form>
        </header>

        <section id="preferences">
            <h2>Preferencias</h2>
            <div>
                <label for="language">Idioma:</label>
                <select id="language" onchange="setLanguagePreference()">
                    <option value="es" selected>Español</option>
                    <option value="en">Inglés</option>
                </select>
            </div>
            <div>
                <label for="theme">Tema:</label>
                <select id="theme" onchange="setThemePreference()">
                    <option value="light" selected>Claro</option>
                    <option value="dark">Oscuro</option>
                </select>
            </div>
        </section>

        <section id="cart">
            <h2>Carrito</h2>
            <select id="product-select">
                <option value="1" data-price="10">Zapatos - 30€</option>
                <option value="2" data-price="20">Camiseta - 10€</option>
                <option value="3" data-price="30">Abrigo - 50€</option>
                <option value="3" data-price="30">Guantes - 5€</option>
            </select>
            <button onclick="addToCart(event)">Añadir al carrito</button>

            <div id="cart-items"></div>
        </section>
    </div>

    <script src="../cliente/scripts/script.js"></script>
</body>
</html>
