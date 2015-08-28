<?php

	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);

	$collection = $request->collection;

	$salida = array();

	include('524/conexion.php');

	$query = "SELECT dlc_watches.ref, dlc_watches.description, dlc_watches.special_timepiece, dlc_watches.new_piece, dlc_collections.name as collectionName, dlc_families.name as familyName FROM dlc_watches INNER JOIN dlc_collections ON dlc_watches.collection=dlc_collections.id_collection INNER JOIN dlc_families ON dlc_collections.family=dlc_families.id_family INNER JOIN dlc_material ON dlc_watches.material=dlc_material.id_material WHERE dlc_watches.active=1 ORDER BY dlc_families.sort ASC, dlc_collections.sort ASC, dlc_material.material ASC;";

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
			    "collectionName"=>$row['collectionName'],
			    "description"=>$row['description'],
			    "familyName"=>$row['familyName'],
			    "new"=>$row['new_piece']
			);

	    	$conta ++;

		}

	}

	echo json_encode($salida);

	include "524/cerrar_conexion.php";

?>