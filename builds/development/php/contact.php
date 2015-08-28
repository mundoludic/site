<?php

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

//Variables del formulario de alta de proveedores

$firstName = $request->firstName;
$lastName = $request->lastName;
$email = $request->email;
$telephone = $request->telephone;
$country = $request->country;
$city = $request->city;
$postalCode = $request->postalCode;
$typeRequest = $request->typeRequest;
$findUs = $request->findUs;
$comments = $request->comments;
//newsletter
$newsletter = $request->newsletter;
$newsletter = (int)$newsletter;

//date time
date_default_timezone_set('Europe/Zurich');
$date_contact = date("Y-m-d H:i:s");

// Guardamos los datos en la base de datos

include('524/conexion.php');

 	$query_alta = "INSERT INTO contact_web  (first_name,last_name,email,telephone,country,city,postal_code,type_request,find_us,comments,date_contact,newsletter)
    VALUES ('".$firstName."','".$lastName."','".$email."','".$telephone."','".$country."','".$city."','".$postalCode."','".$typeRequest."','".$findUs."','".$comments."','".$date_contact."',".$newsletter.")";

    $result = mysql_query($query_alta);

  if (!$result) 
  {

      //salida con error
    $salida[0] = array(
                     "Cod_error"=>mysql_errno(),
                     "Des_error"=>mysql_error());       

      include "524/cerrar_conexion.php";

      echo json_encode($salida);
      return;
      
    }else{

	// Enviamos un email con los datos de alta

		// ENVIO DEL EMAIL

include "PHPMailer/class.phpmailer.php"; 
$mail = new PHPMailer();
$mail->isSMTP();
$mail->Host = "localhost";
 
$mail->From = "info@delacour.ch";
$mail->FromName = "deLaCour";
$mail->Subject = "deLaCour website Information Request";
$mail->AddAddress($email);
$mail->addBCC("webmaster@delacour.ch");
$mail->addBCC("alexandra.martini@delacour.ch");
$mail->addBCC("alfred@piallo.com");
 
$body  = '
<html><head><title>deLaCour</title></head>
<style>
body{margin:0px;padding:0px;}
table{color:#000;};
#todo{width:800px;height:100px;text-align:left;}
.texto{font: 12px Verdana,sans-serif;color:#777;text-align:right;width:180px;}
.textoGris{font: 13px Verdana,sans-serif;color:#333;}
.textoBlanco{font: 12px Verdana,sans-serif;color:#000;text-align:left;}
.textoGris{font: 12px Verdana,sans-serif;color:#999;text-align:left;}
h3{margin:0;padding:0;}
</style>
<body>
<table width="650px" border="0" cellspacing="5">
  <tr>
    <td colspan="2">
    	<h2>deLaCour Gen&egrave;ve</h2>
    	<h4 class="texto">Thank you for your time, we endeavour to respond to all queries as soon as possible.</h4>
    </td>
    <br />
  </tr>
  <tr>
  	<td colspan="2"><h3>Website Information Request</h3></td>
  </tr>
  <tr>
    <td class="texto" width="100px">Mail sent by:</td>
    <td class="textoBlanco" width="550px">'.$firstName.' '.$lastName.'</td>
  </tr>
  <tr>
    <td class="texto">Type of Request:</td>
    <td class="textoBlanco">'.$typeRequest.'</td>
  </tr>
  <tr>
    <td class="texto" valign="top">Comments:</td>
    <td class="textoBlanco">'.$comments.'</td>
  </tr>
  <tr>
    <td class="texto">Country of Residence:</td>
    <td class="textoBlanco">'.$selectCountry.'</td>
  </tr>
  <tr>
    <td class="texto">City:</td>
    <td class="textoGris">'.$city.'</td>
  </tr>
  <tr>
    <td class="texto">Postal Code:</td>
    <td class="textoGris">'.$postalCode.'</td>
  </tr>
  <tr>
    <td class="texto">Email:</td>
    <td class="textoBlanco">'.$email.'</td>
  </tr>
  <tr>
    <td class="texto">How did you find Us:</td>
    <td class="textoBlanco">'.$findUs.'</td>
  </tr>
</table>
</body>
</html>
';

$mail->Body = $body;
$mail->AltBody = "deLaCour Watches - Website Information Request";

$exito = $mail->Send();


    //salida correcta
    $salida[0] = array(
        "Cod_error"=>0,
        "Des_error"=>"Ejecución correcta");

}

echo json_encode($salida);  

include "524/cerrar_conexion.php";

?>