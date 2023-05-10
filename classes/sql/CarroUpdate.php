<?php 
    require_once("classes/conexao.php");


    class CarroUpdate{

        private $sql = "";

        public function update($id, $nome, $marca, $modelo, $cor, $km, $ano, $preco, $caminho){
            $conexao = new Conexao;

            $this->setSql("UPDATE carros SET nome = '{$nome}', marca = '{$marca}', modelo = '{$modelo}', cor = '{$cor}', km = '{$km}', ano = '{$ano}', preco = '{$preco}', caminho = '{$caminho}' WHERE id = '{$id}'");

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