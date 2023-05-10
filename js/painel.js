function confirmLogin(){

    var email = document.getElementById("email").value
    var senha = document.getElementById("password").value
    senha = `${senha}`
    if(email.length < 1){
        document.getElementById("confirmAll").innerText = "Digite o email!"
    }
    else if(senha.length < 1){
        document.getElementById("confirmAll").innerText = "Digite  a senha!"
    }  
    else{
        dados = `${email},${senha}`

        var xhr = new XMLHttpRequest()
        xhr.open("POST", `ajax_painel_admin_login.php`)
        xhr.setRequestHeader("Content-Type", "application/json")
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4 && xhr.status === 200){
                var retorno = JSON.parse(xhr.response)
                if(retorno.sucesso == true){
                    window.location.href = "admin_screen.html"
                }
            }
            else{
                document.getElementById("confirmAll").innerText = "Erro ao efetuar login."
            }
        }
        xhr.send(dados)

    }
}