<?php
session_start();
include 'db.php';

$email_cookie = isset($_COOKIE['user_email']) ? $_COOKIE['user_email'] : "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM users WHERE email='$email'";
    $result = $conn->query($sql);

    if ($result->num_rows == 1) {
        $user = $result->fetch_assoc();

        if (password_verify($password, $user['password'])) {
            $_SESSION['user_name'] = $user['name'];
            $_SESSION['user_email'] = $user['email'];

            // Cookies
            setcookie("user_email", $email, time() + (86400 * 7));
            setcookie("last_login", date("Y-m-d H:i:s"), time() + (86400 * 7));

            header("Location: dashboard1.php");
            exit();
        } else {
            echo "Wrong password!";
        }
    } else {
        echo "User not found!";
    }
}
?>

<h2>Login</h2>
<form method="POST">
    Email: <input type="email" name="email" value="<?php echo $email_cookie; ?>" required><br><br>
    Password: <input type="password" name="password" required><br><br>
    <input type="submit" value="Login">
</form>

<p>New user? <a href="register.php">Register here</a></p>