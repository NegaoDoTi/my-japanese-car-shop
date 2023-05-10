<?php
   $json = file_get_contents("php://input");
    try{
        $cep = json_decode($json);

        exec("python request_api.py {$cep}", $terminal_respone);

        $retorno = utf8_encode(implode("\n", $terminal_respone));
        $retorno = json_decode($retorno);

        echo json_encode($retorno);
    }
    catch(Exception $e){
        trigger_error($e->getMessage());
    }
?>