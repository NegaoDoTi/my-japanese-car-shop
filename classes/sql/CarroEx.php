<?php 
    require_once("classes/conexao.php");
    
    class Carro{
        
        protected $sql = "SELECT * FROM carros WHERE id = ";

        public function buscarCarro($id){
            $conexao = new Conexao;
            $this->setSql($this->getSql().mysqli_real_escape_string($conexao->getConexao(), $id));
            $retorno = $conexao->rodar($this->getSql());
            return $retorno;
        }

        public function getSql(){
            return $this->sql;
        }
        public function setSql($sql){
            $this->sql = $sql;
        }
    }
?>