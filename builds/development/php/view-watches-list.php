<?php

	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);

	$salida = array();

	include('524/conexion.php');

	$query = "SELECT dlc_collections.name, dlc_collections.functions, dlc_watches.ref, dlc_watches.description FROM `dlc_watches` INNER JOIN `dlc_collections` ON dlc_collections.id_collection=dlc_watches.collection WHERE dlc_watches.active=1 ORDER BY dlc_collections.name;";

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
			    "name"=>$row['name'],
			    "functions"=>$row['functions'],
			    "description"=>$row['description']
			);

	    	$conta ++;

		}

	}

	include "524/cerrar_conexion.php";

?>

<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>

	<table>
		
		<?php foreach ($salida as $item){?>

		<?php 
			$rutaImg = "../images/collections/watches/small/".$item['ref'].".jpg";
		?>

		<tr>
			<td><?php echo("<img src=".$rutaImg.">"); ?></td>
			<td><?php echo($item['name']) ?></td>
			<td><?php echo($item['ref']) ?></td>
			<td><?php echo($item['functions']) ?></td>
			<td><?php echo($item['description']) ?></td>
		</tr>

		<?php } ?>

	</table>

</body>
</html>