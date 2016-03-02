<?php
	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
	require 'clases/dbconn.inc';

	//Conexión a la BD
	$query = new dbconn();
	$query->init();
	$query->OpenDataBase();


	$data_back = json_decode(file_get_contents('php://input'));

	$nombres=utf8_decode($data_back->{nombres});
	$edad=utf8_decode($data_back->{edad});
	$dni=utf8_decode($data_back->{dni});
	$telefono=utf8_decode($data_back->{telefono});
	$correo=utf8_decode($data_back->{correo});
	$mega=utf8_decode($data_back->{mega});

	if($nombres!="") {
		$query->OpenDataBaseQuery("insert into usuario (nombres,dni,telefono,correo,mega,edad) values ('$nombres','$dni', '$telefono','$correo', '$mega', '$edad');");	
	}

	echo "Registro completo";
?>