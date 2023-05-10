document.addEventListener("DOMContentLoaded", function() {
    pegarVideo();
})
function pegarVideo(){
    var xhr = new XMLHttpRequest()
    xhr.open("GET", `ajax_consulta_video.php`)
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            var retorno = JSON.parse(xhr.response)
            var source = document.getElementById("video_link")
            var video = document.getElementById("video_r")
            if(video){
                source.src = retorno
                video.addEventListener("loadedmetadata", function(){
                    var altura = (42*video.videoHeight)/100
                    var largura = (42*video.videoWidth)/100
                    video.style.width = `${largura}px`
                    video.style.left = "50%"
                })
                video.load()
                ajustaTamanhoLogin()
                video.muted = true
                video.play()
            }
        }
    }
    xhr.send()
}
function submit(){
    if(document.getElementById("consultar").value == 1){
        var nome = document.getElementById("nome").value
        var email = document.getElementById("email").value
        var senha = document.getElementById("senha").value
        var telefone = document.getElementById("telefone").value
        var confirmarSennha = document.getElementById("confirmarSenha").value
        var cep = document.getElementById("cep").value
        if(nome.length < 2){
            document.getElementById("resultadoNOME").innerText = `Digite um nome valido!`
            document.getElementById("resultadoNOME").hidden = false
        }
        else if(email.length < 2){
            document.getElementById("resultadoEMAIL").innerText = "Digite um email valido!"
            document.getElementById("resultadoEMAIL").hidden = false
        }
        else if(senha != confirmarSennha){
            document.getElementById("resultadoSENHAS").innerText = "As duas senhas não conferem!"
            document.getElementById("resultadoSENHAS").hidden = false
        }
        else if(senha.toString().length < 5 && senha == confirmarSennha){
            document.getElementById("resultadoSENHAS").innerText = "Digite uma senha valida de no minimo 6 caractes."
            document.getElementById("resultadoSENHAS").hidden = false
        }
        else if(confirmarSennha.length < 5){
            document.getElementById("resultadoSENHAS").innerText = "Confirme a senha!"
            document.getElementById("resultadoSENHAS").hidden = false
        }
        else if(telefone.toString().length < 11 || telefone.toString().length < 11 ){
            document.getElementById("resultadoTELEFONE").innerText = `Digite um telefone valido!`
            document.getElementById("resultadoTELEFONE").hidden = false
        }
        else{
            var xhr = new XMLHttpRequest()
            var dadosForm = `${nome},${email},${senha},${cep},${telefone}`
            xhr.open("POST", `ajax_inserir_novo_usuario.php`)
            xhr.setRequestHeader("Content-Type", "application/json")
            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4 && xhr.status === 200){
                    var retorno = JSON.parse(xhr.response)
                    if(retorno == "SUCESSO"){
                        document.getElementById("resultadoGERAL").innerText = "CONTA CADASTRADA!"
                        document.getElementById("resultadoGERAL").hidden = false
                        document.getElementById("cadastrar").disabled = true
                        document.getElementById("nome").value = ""
                        document.getElementById("email").value = ""
                        document.getElementById("senha").value = ""
                        document.getElementById("telefone").value = ""
                        document.getElementById("confirmarSenha").value = ""
                        document.getElementById("cep").value = ""
                        document.getElementById("cadastrar").hidden = "true"
                        document.getElementById("resultadoCEP").innerText = ""
                        document.getElementById("consultar").style.backgroundColor = "white"
                    }
                    else{
                        document.getElementById("resultadoGERAL").innerText = "Ocorreu algum erro ao criar a conta, tente mais tarde! Recarregando em 5 segundos!"
                        document.getElementById("resultadoGERAL").hidden = false
                        document.getElementById("cadastrar").disabled = true
                        setInterval(function()
                        {
                            location.reload()
                        }, 5000)
                    }
                }
                if(xhr.readyState !== 4 && xhr.status !== 200){
                    document.getElementById("resultadoGERAL").innerText = "Ocorreu algum erro ao criar a conta, tente mais tarde! Recarregando em 5 segundos!"
                    document.getElementById("resultadoGERAL").hidden = false
                    setInterval(function()
                    {
                        location.reload()
                    }, 5000)
                }
            }
            xhr.send(dadosForm)
        }
    }
    else{
        document.getElementById("resultadoGERAL").innerText = "Confirme o CEP para continuar com o cadastro!"
        document.getElementById("resultadoGERAL").hidden = false
    }
}
function consultarCEP(){
    var video = document.getElementById("video_r")
    if(document.getElementById("cep").value == ""){
        var divResposta = document.getElementById("resultadoCEP").innerText = "Digite o CEP!"
        document.getElementById("resultadoCEP").hidden = false
        document.getElementById("consultar").style.backgroundColor = "red"
    }
    else{
        var inputCEP = document.getElementById("cep").value
        if(inputCEP.toString().length !== 8){
            document.getElementById("resultadoCEP").innerText = "CEP invalido!"
            document.getElementById("resultadoCEP").hidden = false
            document.getElementById("cep").value = ""
            document.getElementById("consultar").style.backgroundColor = "red"
        }
        else{
            var xhr = new XMLHttpRequest()
            xhr.open("POST", `http://localhost/responsive/ajax_cep.php`)
            xhr.setRequestHeader("Content-Type", "application/json")
            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4 && xhr.status === 200){
                    var consulta = JSON.parse(xhr.response)
                    if(consulta.erro == true){
                        document.getElementById("resultadoCEP").innerText = "ERRO: CEP invalido!"
                        document.getElementById("resultadoCEP").hidden = false
                        document.getElementById("cep").value = "";
                        document.getElementById("consultar").style.backgroundColor = "red"
                    }
                    else{
                        document.getElementById("resultadoCEP").innerText = `Cidade: ${consulta.localidade}/${consulta.uf},
                        Bairro: ${consulta.bairro},
                        Rua/Avenida: ${consulta.logradouro}
                        `
                        document.getElementById("resultadoCEP").hidden = false
                        document.getElementById("consultar").value = 1
                        document.getElementById("consultar").style.backgroundColor = "rgb(48, 252, 48)"
                        document.getElementById("cep").value = `${inputCEP}`;
                    }
                }
                else{
                    document.getElementById("resultadoCEP").innerText = "ERRO ao consultar as informações do CEP"
                    document.getElementById("resultadoCEP").hidden = false
                    document.getElementById("cep").value = "";
                    document.getElementById("consultar").style.backgroundColor = "red"
                }
            }
            xhr.send(inputCEP)
        }
    }
}
function ajustaTamanhoLogin(){
    var divLogin = document.getElementById("login_div")
    var divVideo = document.getElementById("video_div")
    divLogin.style.height = `${divVideo.offsetHeight}px`
}
function controleVideo(){
    var video = document.getElementById("video_r")
    video.setAttribute("loop", "true")
    if(video.paused == true){
        video.play();
        video.muted = false
    }
    else{
        video.pause();
    }
}