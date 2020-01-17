<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: text/html; charset=utf-8');
$host = "mysql:host=localhost;dbname=db_catalago";
$usuario = "root";
$senha = "";

try{
    $conexao = new PDO($host, $usuario, $senha);

    if(!$conexao){
        echo "Não foi possivel se conectar ao banco de Dados!";
    }

	$query = $conexao->prepare('SELECT * FROM `produto` order by id_prod asc');
        
        $query->execute();

        $out = "[";

        while ($result = $query->fetch()) {
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

} catch (Exception $e) {
    echo "Erro: ". $e->getMessage();
}
