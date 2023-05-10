<?php 
    require_once("classes/conexao.php");

    class InserirCarro{
        private $sql = "";

        public function inserir($nome, $marca, $modelo, $cor, $km, $ano, $preco, $caminho){
            $conexao = new Conexao;

            $sql = "INSERT INTO carros(nome, marca, modelo, cor, km, ano, preco, caminho) VALUES  ('$nome', '$marca', '$modelo', '$cor', '$km', '$ano', '$preco', '$caminho')";
            $this->setSql($sql);

            $retono = $conexao->rodar($this->getSql());

            return $retono;
        }        

        public function setSql($sql){
            $this->sql = $sql;
        }
        public function getSql(){
            return $this->sql;
        }
    }
?>