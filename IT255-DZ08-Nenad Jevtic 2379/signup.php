<?php 
if($_POST["pass1"]==$_POST["pass2"] && $_POST["pass1"]!="" && $_POST["u_name"]!="")
{
$con=mysql_connect("localhost","root","");
if(!$con) 
  {
  die('Greska prilikom konektovanja :'.mysql_error());
  }
mysql_select_db("user_login",$con);

$result=mysql_query("SELECT username FROM user_info WHERE username='$_POST[u_name]'");
if(!mysql_fetch_array($result,MYSQL_ASSOC))
  {
  
$sql="INSERT INTO user_info(username, password) VALUES('$_POST[u_name]','$_POST[pass1]')";
if(!mysql_query($sql,$con))
  {
  die('Error :'.mysql_error());
  }
 echo "Registrovanje uspesno!!!";
 echo "<a href='homepage.html'> Nazad na pocetnu </a>";
 }
else
 {
 echo "Ovaj username vec postoji! ";
 echo "<a href='homepage.html'> Nazad na pocetnu </a>";
 }
 mysql_close($con);
}
else
{
if($_POST["pass1"]!=$_POST["pass2"])
  echo "Lozinke se ne poklapaju <br />";
else
  echo "Pogresan username  <br />";
echo "<a href='homepage.html'> Nazad na pocetnu </a>";
}

?>
