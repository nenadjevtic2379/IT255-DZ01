<?php

 $a=$_POST['a'];

function faktorijal($a) {
	
	if($a==0) {
		$rezultat=1;
		return $rezultat;
	}
	
	else if ($a==1) {
		$rezultat=1;
		return $rezultat;
	}
	
	else{
		
		$rezultat=$a * faktorijal($a-1);
		return $rezultat;
	}
	
}


header("Content-type: application/json");
$test_array = array (
'rezultat' => faktorijal($a),
);
echo json_encode($test_array);

?>