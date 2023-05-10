<?php 
    require_once("classes/conexao.php");
    class Carros{
        protected $sql = "SELECT id, nome, preco, caminho FROM carros";


        public function buscar(){
            try{
                $conexao = new Conexao;
                $retono = $conexao->rodar($this->getSql());
                return $retono;
            }
            catch (Exception $e) {
                trigger_error($e->getMessage());
            }
        }
        public function getSql(){
            return $this->sql;
        }
        public function setSql($sql){
            $this->sql = $sql;
        }
    }
?>