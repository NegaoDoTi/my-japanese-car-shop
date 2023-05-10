window.onload = sair()
function sair(){
    var xhr = new XMLHttpRequest()
    xhr.open("GET", `ajax_sair.php`)
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            var retorno = JSON.parse(xhr.response)
            if(retorno.mensagem == false){
                window.alert("Erro sair contate o admistrador do sistema!")
                window.location.href = "loja.html"
            }
            if(retorno.mensagem == true){
                window.location.href = "login.html"
            }
        }
    }
    xhr.send()
}