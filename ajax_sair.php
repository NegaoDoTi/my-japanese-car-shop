<?php 
    if(!isset($_SESSION)){
        session_start();
        session_destroy();
        echo json_encode(
            array(
                "mensagem" => true
            )
        );
    }
    else{
        echo json_encode(
            array(
                "mensagem" => false
            )
        );
    }
?>