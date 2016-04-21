<?php 
session_start();
$con=mysql_connect("localhost","root","");
if(!$con) 
  {
  die('Greska prilikom konektovanja na server :'.mysql_error());
  }
mysql_select_db("user_login",$con);
$result=mysql_query("SELECT username,password FROM user_info WHERE username='$_POST[u_name]' && password='$_POST[pass1]'");
if(!mysql_fetch_array($result,MYSQL_ASSOC))
  {
  echo "Greska! Vrati se i pokusaj ponovo.";
  echo "<br /><a href='homepage.html'> Nazad na pocetnu </a>";
  }
else
  {
 $_SESSION['access']=1;
 $_SESSION['user']=$_POST[u_name];
 header('Location: website.php');
  
  
  }
 mysql_close($con);



?>
