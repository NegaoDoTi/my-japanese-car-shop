<?php 
    require_once("classes/conexao.php");
    class Login{
        public $email;
        public $senha;
        
        public function Logar($email, $senha){
            try{
                $conexao =  new Conexao;
                $sql = "SELECT id, nome, email, senha FROM usuarios WHERE email = '$email'";
                $retorno = $conexao->rodar($sql);
                $emailCorreto = false;
                $senhaCorreta = false;
                if($email == $retorno['email']){
                    $emailCorreto = true;
                }
                if(password_verify($senha, $retorno['senha'])){
                    $senhaCorreta = true;
                }
                if($emailCorreto == true and $senhaCorreta == true){
                    return $saida = array(
                        "id" => $retorno['id'],
                        "nome" => $retorno['nome'],
                        "hash" => $retorno['senha'],
                        "email" => $retorno["email"],
                        "sucesso" => true
                    );
                }
                else{
                    return $saida = array(
                        "sucesso" => false
                    );
                }
            }
            catch(Exception $e){
               trigger_error($e->getMessage()); 
            }
        }
        public function verificar($usuario, $nome, $hash_senha){
            try{
                $conexao = new Conexao;
                $sql = "SELECT nome, senha FROM usuarios WHERE id = '$usuario'";
                $retorno = $conexao->rodar($sql);
                if($retorno['nome'] == $nome and $retorno['senha'] == $hash_senha){
                    return true;
                }
                else{
                    return false;
                }
            }
            catch(Exception $e){
                trigger_error($e->getMessage());
            }

        }
    }
?>