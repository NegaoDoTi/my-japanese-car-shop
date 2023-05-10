<?php 

    require_once("classes/sql/CarroUpdate.php");
    $json = file_get_contents("php://input");
    try{

        $dados = json_decode($json);

        $update = new CarroUpdate;

        $retorno = $update->update($dados->id, $dados->nome, $dados->marca, $dados->modelo, $dados->cor, $dados->km, $dados->ano, $dados->preco, $dados->caminho);

        $ajax = [
            "mensagem" => false
        ];

        if ($retorno == true){
            $ajax = [
                "mensagem" => true
            ];

        }

        echo json_encode($ajax);

    }
    catch(Exception $e){
        trigger_error($e->getMessage());
    }

?>