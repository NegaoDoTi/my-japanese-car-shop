<?php 

    class Conexao{
        private $conexao;
        private $sql;
        private $retorno;

        public function __construct()
        {
            $this->setConexao();
        }
        public function rodar($sql){
            try{
                $this->setSql($sql);
                if(is_bool($this->getRetorno())){
                    $retorno = $this->getRetorno();
                }
                if(!is_bool($this->getRetorno())){
                    if(mysqli_num_rows($this->getRetorno()) > 1){
                        $retorno = mysqli_fetch_all($this->getRetorno());
                    }
                    else if(mysqli_num_rows($this->getRetorno()) === 0){
                        $retorno = false;
                    }
                    else{
                        $retorno = mysqli_fetch_assoc($this->getRetorno());
                    }
                }
                if($retorno === null){
                    return $this->getRetorno();
                }
                else{
                    return $retorno;
                }
            }
            catch(Exception $e){
                return $e->getMessage();
            }
        }
        public function getConexao(){
            return $this->conexao;
        }
        public function setConexao(){
            try{
                $this->conexao = new mysqli('localhost', 'root', '', 'responsive');
                if($this->conexao->connect_errno){
                    throw new Exception($this->conexao->connect_errno);
                }
            }
            catch(Exception $e){
                return $e->getMessage();
            }

        }
        public function getSql(){
            return $this->sql;
        }
        public function setSql($sql){
            try{
                $this->sql = mysqli_query($this->getConexao(), $sql);
                $this->setRetorno($this->getSql());
                if($this->getSql() == false){
                    throw new Exception($this->getConexao()->error);
                }
                return $this->getRetorno();
            }
            catch(Exception $e){
                return $e->getMessage();
            }
            
        }
        public function getRetorno(){
            return $this->retorno;
        }
        public function setRetorno($retorno){
            $this->retorno = $retorno;
        }
    }
?>