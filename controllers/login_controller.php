<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

include_once '../database/conexao.php';

echo $user =  mysqli_escape_string($conexao, $_POST['user']);
echo "<br>";
echo $pass =  mysqli_escape_string($conexao, $_POST['pass']);
echo "<br>";

$pesquisa_u = mysqli_query($conexao, "SELECT
  u.id,
  u.apelido,
  (
    SELECT
      GROUP_CONCAT(AA.nome SEPARATOR ', ')
    FROM
      areas_administrativas AS AA
      JOIN usuario_areas AS ua ON ua.area_adm_id = AA.id
    WHERE
      ua.usuario_id = u.id
  ) AS Areas
FROM
  usuarios AS u
WHERE
  (u.email = 'user' OR u.apelido = '$user')
  AND u.senha_salted_hashed = MD5('$pass');") or die("MySQL Error: " . $mysqli->Error);

echo $row = mysqli_num_rows($pesquisa_u);

if ($row) {
    echo 'entrou';
    $user = mysqli_fetch_assoc($pesquisa_u);
    echo "<br>";
    echo $_SESSION['userID'] = $user['id'];
    echo "<br>";
    echo $_SESSION['user'] = $user['apelido'];
    echo "<br>";
    echo $_SESSION['areas'] = $user['Areas'];
    echo "<br>";

    echo "<script>alert('Logado com Sucesso!, Bem vindo, " . $_SESSION['user'] . "');</script>";
    echo "<script>location.href='../pages/home.php';</script>";
} else {
    echo "<script> alert('$user, verifique!, Usurio e/ou senha incorreta!'); </script>";
    echo "<script> history.go(-1) </script>";
}
