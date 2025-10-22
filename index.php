<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if (!isset($_SESSION)){
    session_start();
}

if (isset($_SESSION['user'])) {
    header("Location: ./pages/home.php");
} else {
    header("Location: ./pages/login.php");
}

exit;
