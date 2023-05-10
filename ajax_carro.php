<?php 
    require_once("classes/sql/CarroEx.php");
    $json = file_get_contents("php://input");
    try{
        $id = $json;
        $carro = new Carro;
        $retorno = $carro->buscarCarro($id);
        if($retorno != false){
            extract($retorno);
            $dados = array(
                "mensagem" => true,
                "id" => $id,
                "nome" => $nome,
                "marca" => $marca,
                "modelo" => $modelo,
                "cor" => $cor,
                "km" => $km,
                "ano" => $ano,
                "preco" => $preco,
                "caminho" => $caminho,
                "pagina" => false
            );
        }
        if($retorno === false){
            $dados = array(
                "mensagem" => false,
                "pagina" => "loja.html"
            );
        }
        if(!isset($_SESSION)){
            session_start();
            if(!isset($_SESSION['nome']) and !isset($_SESSION['id']) and !isset($_SESSION['hash'])){
                session_destroy();
                $dados = array(
                    "mensagem" => false,
                    "pagina" => "login.html"
                );
            }
        }
        echo json_encode($dados);
    }
    catch (Exception $e) {
        trigger_error($e->getMessage());
    }
?>