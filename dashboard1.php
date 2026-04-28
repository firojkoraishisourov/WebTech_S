<?php
session_start();

if (!isset($_SESSION['user_name'])) {
    header("Location: login1.php");
    exit();
}
?>

<h2>Dashboard</h2>

<p>Welcome, <?php echo $_SESSION['user_name']; ?>!</p>

<?php
if (isset($_COOKIE['last_login'])) {
    echo "<p>Last login: " . $_COOKIE['last_login'] . "</p>";
}
?>

<a href="logout1.php">Logout</a>