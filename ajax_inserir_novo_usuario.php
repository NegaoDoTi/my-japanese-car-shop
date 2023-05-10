<?php
    require_once("classes/sql/InserirUsuario.php");
    $json = file_get_contents("php://input");
    try{
        if(strlen($json) > 0){
            $dados = explode(",", $json);
            $inserir =  new InserirUsuario;
            $retorno = $inserir->inserirNovoUsuario($dados[0], $dados[1], password_hash($dados[2], PASSWORD_DEFAULT),  $dados[3], $dados[4]);
            if($retorno === true){
                echo json_encode("SUCESSO");
            }
            else{
                throw new Exception("Erro ao criar conta!");
            }
        }
    }
    catch(Exception $e){
        return json_encode($e->getMessage());
    }

?>