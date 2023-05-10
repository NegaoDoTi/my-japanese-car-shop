<?php 

    require_once("classes/sql/AdminCarros.php");
    try{
        $carros = new AdminCarros;
        $retorno = $carros->buscar();;

        echo json_encode($retorno);
    }
    catch(Exception $e){
        trigger_error($e->getMessage());
    }
?>