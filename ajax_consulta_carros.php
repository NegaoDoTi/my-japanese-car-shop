<?php 
    require_once("classes/sql/CarrosLoja.php");
    try{
        $carros = new Carros;
        $retorno = $carros->buscar();
        for($i = 0; $i <= count($retorno) - 1; $i++){
            $dados[] = $retorno[$i];
        }
        echo json_encode(
            array(
                "mensagem" => true,
                "dados" => $dados
            )
        );
    }
    catch (Exception $e) {
        echo json_encode(
            array(
                "mensagem" => false,
            )
        );
        trigger_error($e->getMessage());
    }
?>