
<?php

if (!isset($_SESSION)) {
    session_start();
}


if (!isset($_SESSION['user'])) {

    echo 'não setado';
    // header("Location: ./login.php");

    exit;
} else {
    $user = $_SESSION['user'];
}

?> 


<html lang="pr-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Diretoria App</title>
</head>
<body>

    <h1>Home Page  </h1>
    <h3><?php echo $user ?></h3>
</body>
</html>