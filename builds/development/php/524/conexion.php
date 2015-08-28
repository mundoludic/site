<?php

$dbhost="127.0.0.1";  // host del MySQL (generalmente localhost)
$dbusuario="root"; // aqui debes ingresar el nombre de usuario
                      // para acceder a la base
$dbpassword="Ad367417"; // password de acceso para el usuario de la
                      // linea anterior
$db="delacour";        // Seleccionamos la base con la cual trabajar

$conexion = mysql_connect($dbhost, $dbusuario, $dbpassword);
mysql_select_db($db, $conexion);

mysql_query("SET NAMES 'utf8'", $conexion);

?>