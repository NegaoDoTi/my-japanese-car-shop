<?php
    require_once("classes/sql/Login.php");
    $json = file_get_contents("php://input");
    try{
        $parametros = explode(",", $json);
        $login = new Login;

        if($parametros[0] != "admin@admin.com"){
            echo json_encode(array(
                "sucesso" => false,
                "mesage" => "erro ao efetuar login"
            ));
            return http_response_code(400);
        }

        $retorno = $login->Logar($parametros[0], $parametros[1]);
        if($retorno["sucesso"] == true){
            session_start();
            $_SESSION["nome"] = $retorno["nome"];
            $_SESSION["id"] = $retorno["id"];
            $_SESSION["hash"] = $retorno["hash"];
            $_SESSION["email"] = $retorno["email"];

            echo json_encode(array(
                "sucesso" => true,
                "mesage" => "Login efetuado com sucesso!"
            ));

            return http_response_code(200);

        }
        echo json_encode(array(
            "sucesso" => false,
            "mesage" => "Erro ao efetura login"
        ));

        return http_response_code(400);

    }catch(Exception $e){
        trigger_error($e->getMessage());
    }
?>