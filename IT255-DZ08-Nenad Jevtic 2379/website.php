<?php
require 'access.php';
?>
<html lang="en">
<head>
 <title>IT255-DZ08</title>
 <link rel="stylesheet" href="css/style.css" type="text/css"/>
		<link href='https://www.google.com/fonts/specimen/Open+Sans+Condensed#stats' rel='stylesheet' type='text/css'>
 <meta charset="utf-8">
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <link rel="stylesheet"
href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
 <script
src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
 <script
src="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
</head>
<body>
<nav class="navbar navbar-inverse">
 <div class="container-fluid">
 <div class="navbar-header">
 <button type="button" class="navbar-toggle" data-toggle="collapse" datatarget="#myNavbar">

 <span class="icon-bar"></span>
 <span class="icon-bar"></span>
 <span class="icon-bar"></span>
 </button>
 <a class="navbar-brand" href="#">MetHotels</a>
 
 </div>
 <div class="collapse navbar-collapse" id="myNavbar">
 <ul class="nav navbar-nav">
 <li class="active"><a href="#">Pocetna</a></li>
 <div class="btn-group">
 <button type="button" class="btn btn-success">Informacije</button>
 <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown"
aria-expanded="false">
 <span class="caret"></span>
 <span class="sr-only">Opcije</span>
 </button>
 <ul class="dropdown-menu" role="menu">
 <li><a href="#">Rezervisi</a></li>
 <li><a href="#">Lokacija</a></li>
 <li><a href="#">Cene</a></li>
 <li class="divider"></li>
 <li><a href="#">Izadji</a></li>
 </ul>
</div>
 
 </ul>
 <ul class="nav navbar-nav navbar-right">
 
 <form method="post" action="logout.php">
<input type="submit" value="Logout" />
</form>
 </ul>
 </div>
 </div>
</nav>

<div class="container">
 <div class="jumbotron">
 <div class="zvezdice">
 <span class="glyphicon glyphicon-star-empty"></span>
 <span class="glyphicon glyphicon-star-empty"></span>
 <span class="glyphicon glyphicon-star-empty"></span>
 <span class="glyphicon glyphicon-star-empty"></span>
 <span class="glyphicon glyphicon-star-empty"></span>
 </div>
 
 <h1>MetHotels</h1>
 <p>Hotel sa 5 zvezdica</p>
 </div>
 <div class="row">
 <div class="col-sm-4">
 <h3>Sobe</h3>
	<div id="slika1">
		<img src="slike/jedan.jpg"/>
		</div>
 </div>
 <div class="col-sm-4">
 <h3>Apartmani</h3>
 <div id="slika2">
		<img src="slike/dva.jpg"/>
		</div>
 </div>
 <div class="col-sm-4">
 <h3>Dupleksi</h3>
 <div id="slika3">
		<img src="slike/tri.jpg"/>
		</div>
 </div>
 </div>
 
 
 
</div>





</body>
</html>