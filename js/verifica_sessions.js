function logar(){
    var xhr = new XMLHttpRequest()
    xhr.open("GET", `ajax_session.php`)
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            var retorno = JSON.parse(xhr.response)
            if(retorno.mensagem == false){
                window.location = retorno.pagina
                return false
            }
            if(retorno.mensagem == true){
                document.getElementById("nome").innerText = retorno.nome
            }
        }
    }
    xhr.send()
}