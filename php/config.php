<?php

//------------Server Online----------------- 

header("Access-Control-Allow-Origin: *");
header('Content-Type: text/html; charset=utf-8');
$host = "mysql:host=localhost;dbname=id12274822_catalogo_2020";
$usuario = "id12274822_matheus";
$senha = "kyh*57723528";


//-----------Server Localhost----------------- 

// header("Access-Control-Allow-Origin: *");
// header('Content-Type: text/html; charset=utf-8');
// $host = "mysql:host=localhost;dbname=db_catalago";
// $usuario = "root";
// $senha = "";

$conexao = new PDO($host, $usuario, $senha);

?>