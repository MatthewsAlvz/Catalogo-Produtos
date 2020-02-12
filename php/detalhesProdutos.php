<?php

try {
	require 'config.php';

	if(!$conexao){
		echo "Não foi possivel conectar com Banco de Dados!";
    }

     if(isset($_GET["id_prod"]) ){
        if(!empty($_GET["id_prod"])){
    
    $idproduto = $_GET['id_prod'];

	$query = $conexao->prepare("SELECT * FROM produto where id_prod = '$idproduto'");

		$query->execute();

		$out = "[";

		while($result = $query->fetch()){
			if ($out != "[") {
				$out .= ",";
			}
			$out .= '{"codigo": "'.$result["id_prod"].'",';
			$out .= '"nome": "'.$result["nome_prod"].'",';
			$out .= '"quantidade": "'.$result["quantidade_prod"].'",';
			$out .= '"descricao": "'.$result["desc_prod"].'",';
			$out .= '"foto": "'.$result["foto_prod"].'",';
			$out .= '"valor": "'.$result["valor_prod"].'",';
			$out .= '"criacao": "'.$result["data_cad_prod"].'",';
			$out .= '"status": "'.$result["status_prod"].'"}';
			
		}
		$out .= "]";
		echo utf8_encode($out);
       }
        
}


} catch (Exception $e) {
	echo "Erro: ". $e->getMessage();
};