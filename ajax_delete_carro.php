<?php 
    require_once("classes/sql/DeleteCarroEx.php");
    $json = file_get_contents("php://input");
    try{
        $dados = json_decode($json);

        $delete = new DeleteCarroEx;

        $retorno = $delete->buscarCarro($dados->id);    
        $ajax = [
            "mensagem" => false
        ];
        if($retorno == true){
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