<?php 
    require_once("classes/sql/CarrosLoja.php");

    class AdminCarros extends Carros{

        protected $sql = "SELECT * FROM carros";
    }

?>