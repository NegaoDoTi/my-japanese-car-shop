<?php 
    require_once("classes/sql/Login.php");
    try{
        if(isset($_POST['email']) and isset($_POST['senha'])){
            $dados = array(
                "email" => $_POST['email'],
                "senha" => $_POST['senha']
            );
            $login = new Login;
            $verificar = $login->Logar($dados["email"], $dados["senha"]);
            if($verificar['sucesso'] == true){
                if(!isset($_SESSION)){
                    session_start();
                    session_id();
                    session_regenerate_id(true);
                }
                $_SESSION['id'] = $verificar['id'];
                $_SESSION['nome'] = $verificar['nome'];
                $_SESSION['hash'] = $verificar['hash'];
                header("Location: loja.html");
                http_response_code(200);
            }
            else if($verificar['sucesso'] == false){
                http_response_code(400);
            }
        }
        else{
            throw new Exception("Informações do login não recebidas!");
        }
    }
    catch(Exception $e){
        trigger_error($e->getMessage());
    }

?>