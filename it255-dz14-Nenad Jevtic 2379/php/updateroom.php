<?php
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Origin: *');
include("functions.php");
if(isset($_POST['tipSobe']) && isset($_POST['kvadrata']) && isset($_POST['brojKreveta']) 
	&& isset($_POST['pogledNa']) && isset($_POST['id'])){
	
$tipSobe = $_POST['tipSobe'];
$kvadrata = intval($_POST['kvadrata']);
$brojKreveta = intval($_POST['brojKreveta']);
$pogledNa = $_POST['pogledNa'];
$id = intval($_POST['id']);	

echo updateRoom($tipSobe,$kvadrata,$brojKreveta,$pogledNa,$id);
}
?>


