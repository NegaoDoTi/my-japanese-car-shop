<?php 
    require_once("classes/sql/InserirCarro.php");
    $json = file_get_contents("php://input");
    try{
        $dados = json_decode($json);
        
        $inserir = new InserirCarro;

        $retorno = $inserir->inserir($dados->nome, $dados->marca, $dados->modelo, $dados->cor, $dados->km, $dados->ano, $dados->preco, $dados->caminho);
        
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