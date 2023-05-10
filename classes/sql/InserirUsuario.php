<?php 
    require_once("classes/conexao.php");
    
    class InserirUsuario{
        private $tabela = "usuarios";

        public function __construct()
        {   

        }   
        public function inserirNovoUsuario($nome, $email, $senha, $cep, $telefone){
            try{
                $conexao = new Conexao;
                $sql = "INSERT INTO usuarios(nome, email, senha, cep,  telefone) 
                        VALUE('$nome', '$email', '$senha', '$cep', '$telefone')";
                $retono = $conexao->rodar($sql);
                if($retono === false){
                    throw new Exception("Erro ao inserir o usuario!");   
                }
                return $retono;
            }
            catch(Exception $e){
                return $e->getMessage();
            }
        }
        public function getTabela(){
            return $this->tabela;
        }
        public function setTabela($tabela){
            $this->tabela = $tabela;
        }
    }
?>