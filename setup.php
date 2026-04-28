<?php
$servername = "localhost";
$username = "root";
$password = "";

$conn = new mysqli($servername, $username, $password);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "CREATE DATABASE IF NOT EXISTS user_system";
$conn->query($sql);

$conn->select_db("user_system");

$sql = "CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255)
)";

if ($conn->query($sql)) {
    echo "Database and table created successfully! <br>";
    echo "<a href='register.php'>Go to Register</a>";
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>