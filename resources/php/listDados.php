<?php
header("Acess-Conrol-Allow-Origin: *"); 
header('Content-Type: text/html; charset=utf-8');
$host = "mysql:host=localhost;dbname=db_catalago";
$usuario = "root";
$senha = "";

try{
    $conexao = new PDO($host, $usuario, $senha);

    if(!$conexao){
        echo "Não foi possivel se conectar ao banco de Dados!";
    }

	$query = $conexao->prepare('SELECT * FROM `produto` order by idproduto asc');
        
        $query->execute();

        $out = "[";

        while ($result = $query->fetch()) {
            if ($out != "[") {
                $out .= ",";
            }

            $out .= '{"codigo": "'.$result["idproduto"].'",';
            $out .= '"nome": "'.$result["nome_prod"].'",';
            $out .= '"quantidade": "'.$result["quantidade_prod"].'",';
            $out .= '"descricao": "'.$result["descricao_prod"].'",';
            $out .= '"foto": "'.$result["foto_prod"].'",';
            $out .= '"valor": "'.$result["valor_prod"].'",';
            $out .= '"status": "'.$result["status_prod"].'",';
            $out .= '"criacao": "'.$result["data_cadastro_prod"].'"}';    
        }
        $out .= "]";
        echo $out;

} catch (Exception $e) {
    echo "Erro: ". $e->getMessage();
}
