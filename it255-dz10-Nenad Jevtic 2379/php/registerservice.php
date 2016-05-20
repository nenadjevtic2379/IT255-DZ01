<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST');
include("config.php");
if(isset($_POST['firstName']) && isset($_POST['lastName']) && isset($_POST['username']) &&
isset($_POST['password'])){
$firstname = $_POST['firstName'];
$lastname = $_POST['lastName'];
$username = $_POST['username'];
$password = md5($_POST['password']);
$stmt = $conn->prepare("INSERT INTO korisnici (firstname, lastname, username, password) VALUES (?,
?, ?, ?)");
$stmt->bind_param("ssss", $firstname, $lastname, $username, $password);
$stmt->execute();
echo "ok";
}
?>