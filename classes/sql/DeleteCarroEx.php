<?php 
    require_once("classes/sql/CarroEx.php");

    class DeleteCarroEx extends Carro{

        protected $sql = "DELETE FROM carros WHERE id = ";

    }

?>