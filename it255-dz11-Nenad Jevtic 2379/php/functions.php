<?php

	include("config.php");

   function getRooms(){
global $conn;
$rarray = array();

$result = mysqli_query($conn, "SELECT * FROM sobe");
$num_rows = mysqli_num_rows($result);
$rooms = array();
if($num_rows > 0)
{
while($row = mysqli_fetch_assoc($result)) {
$one_room = array();
$one_room['id'] = $row['id'];
$one_room['tipSobe'] = $row['tipSobe'];
$one_room['kvadrata'] = $row['kvadrata'];
$one_room['brojKreveta'] = $row['brojKreveta'];
$one_room['pogledNa'] = $row['pogledNa'];
array_push($rooms,$one_room);
}
}
$rarray['rooms'] = $rooms;
return json_encode($rarray);
 
}

?>