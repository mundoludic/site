<?php

	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);

	$collection = $request->collection;

	$salida = array();

	include('524/conexion.php');

	$query = "SELECT dlc_watches.ref, dlc_watches.description as collectionName FROM dlc_watches INNER JOIN dlc_collections ON dlc_watches.collection=dlc_collections.id_collection WHERE dlc_collections.name='$collection';";


	$result = mysql_query($query);

	if (!$result) {

         //salida con error
		 $salida[0] = array(
                     "Cod_error"=>mysql_errno(),
                     "Des_error"=>mysql_error());       

         include "524/cerrar_conexion.php";

         echo json_encode($salida);
         return;
      }

	$num_filas = mysql_num_rows($result);

	if ($num_filas==0)
	{
		//salida de fracaso
		$salida[0] = array(
                     "Cod_error"=>1,
                     "Des_error"=>"There isn't results");       
                      
	}else{

		$conta = 0;
		while ($row = mysql_fetch_assoc($result)) {

		    $salida[$conta] = array(
			    "ref"=>$row['ref'],
			    "description"=>$row['description']
			);

	    	$conta ++;

		}

	}

	echo json_encode($salida);

	include "524/cerrar_conexion.php";

?>