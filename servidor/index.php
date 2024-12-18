<?php 

//index.php
session_start();
if (isset($_SESSION["user"])){
    header("Location: dashboard.php");
    exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $usuario = $_POST['usuario'];
    $contrasena = $_POST['contrasena'];

    //validacion simple para lidia / prueba1
    if($usuario === "Lidia" && $contrasena === "123"){
        $_SESSION['user'] = $usuario;
        header("Location: dashboard.php");
        exit();
} else {
    $error = "Usuario o contraseña incorrectos";
}
}
?>


<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="../cliente/styles/style.css">
</head>
<body>
    <div class="login-container">
        <h2>Iniciar sesión</h2>
        <?php if (isset($error)) echo "<p class='error'>$error</p>"; ?>
        <form method="POST">
            <input type="text" name="usuario" placeholder="Usuario" required>
            <input type="password" name="contrasena" placeholder="Contraseña" required>
            <button type="submit">Iniciar sesión</button>
        </form>
    </div>
</body>
</html>