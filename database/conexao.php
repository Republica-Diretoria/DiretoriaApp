<?php
error_reporting(E_ALL);
    $host = "localhost";
    $user = "root";
    $pass = "";
    $banco = "diretoria";

    $conexao = mysqli_connect($host, $user, $pass, $banco) 
    or die ("conexão com o banco de dados falhou");
?>
