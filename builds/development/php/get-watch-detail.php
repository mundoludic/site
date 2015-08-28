<?php

	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);

	$ref = $request->ref;

	$salida = array();

	include('524/conexion.php');

	$query = "SELECT dlc_watches.ref, dlc_watches.new_piece, dlc_watches.dial_description, dlc_watches.description, dlc_watches.white_dia_case, dlc_watches.black_dia_case, dlc_watches.white_dia_dial, dlc_watches.black_dia_dial, dlc_watches.color_stones_dial, dlc_watches.price, dlc_collections.name, dlc_collections.calibre, dlc_collections.instruction_manual, dlc_collections.dimensions, dlc_collections.type_movement, dlc_collections.power_reserve, dlc_collections.functions, dlc_collections.water_resistant, dlc_collections.glass, dlc_collections.back, dlc_collections.strap, dlc_collections.hands, dlc_collections.limited_edition, dlc_collections.crown FROM dlc_watches INNER JOIN dlc_collections ON dlc_watches.collection=dlc_collections.id_collection WHERE ref='$ref';";


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
		    	"collection"=>$row['name'],
			    "ref"=>$row['ref'],
			    "description"=>$row['description'],
			    "price"=>$row['price'],
			    "limitedEdition"=>$row['limited_edition'],
			    "calibre"=>$row['calibre'],
			    "instructionManual"=>$row['instruction_manual'],
			    "new"=>$row['new_piece'],
			    "dimensions"=>$row['dimensions'],
			    "power_reserve"=>$row['power_reserve'],
			    "functions"=>$row['functions'],
			    "glass"=>$row['glass'],
			    "back"=>$row['back'],
			    "water_resistant"=>$row['water_resistant'],
			    "strap"=>$row['strap'],
			    "hands"=>$row['hands'],
			    "limited_edition"=>$row['limited_edition'],
			    "crown"=>$row['crown'],
			    "white_dia_case"=>$row['white_dia_case'],
			    "black_dia_case"=>$row['black_dia_case'],
			    "white_dia_dial"=>$row['white_dia_dial'],
			    "black_dia_dial"=>$row['black_dia_dial'],
			    "color_stones_dial"=>$row['color_stones_dial'],
			    "type_movement"=>$row['type_movement'],
			    "dial_description"=>$row['dial_description']
			);

	    	$conta ++;

		}

	}

	echo json_encode($salida);

	include "524/cerrar_conexion.php";

?>