<?php
    require_once("classes/sql/Login.php");
    require_once("classes/conexao.php");

    if(!isset($_SESSION)){
        session_start();
        if(isset($_SESSION['nome'])){
            $id = $_SESSION['id'];
            $nome = $_SESSION['nome'];
            $hash_senha = $_SESSION['hash'];
            $admin_email = $_SESSION["email"];
            
            $conexao = new Conexao;

            $retorno = $conexao->setSql("SELECT email FROM usuarios where id = '0'");
            $retorno = mysqli_fetch_assoc($retorno);

            $condicao = false;
            if($admin_email == $retorno["email"]){
                $condicao = true;
            }

            $login = new Login;
            $verificar = $login->verificar($id, $nome, $hash_senha);
            if($verificar === false or $condicao === false){
                session_destroy();
                echo json_encode( array(
                    "mensagem" => false,
                    "pagina" => "defesa_login.html"
                ));
            }
            echo json_encode( array(
                "mensagem" => true,
                "nome" => $_SESSION['nome'],
                "pagina" => ""
            ));
        }
        else if(!isset($_SESSION['id']) and !isset($_SESSION['nome']) and !isset($_SESSION['hash'])){
            session_destroy();
            echo json_encode( array(
                "mensagem" => false,
                "pagina" => "defesa_login.html"
            ));
        }
    }