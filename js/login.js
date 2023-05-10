document.addEventListener("DOMContentLoaded", function() {
    pegarVideo();
    formularioFunc();
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
                    video.style.height = `${altura}px`
                })
                ajustaTamanhoLogin()
                video.load()
                video.muted = true
                video.play()
            }
        }
    }
    xhr.send()
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
function formularioFunc(){
    var formulario = document.getElementById("formulario");
    formulario.addEventListener('submit', function(event){
        event.preventDefault()
        var email = document.getElementById("email").value
        var senha = document.getElementById("senha").value
        formularioData = new FormData(formulario);
        if(email.length < 1){
            document.getElementById("retorno_login").innerText = `Informe o email!`
        }
        else if(senha.length < 1){
            document.getElementById("retorno_login").innerText = `Informe a senha!`
        }
        else{
            var xhr = new XMLHttpRequest()
            xhr.onreadystatechange = function(){
                if(xhr.readyState === XMLHttpRequest.DONE){
                    if(xhr.status === 200){
                        document.getElementById("retorno_login").textContent = `Login realizado com Sucesso!`
                        window.location.href = "loja.html"
                    }
                    else{
                        document.getElementById("retorno_login").textContent = `Falha ao entrar, verifique as suas credencias!`;
                    }
                }
            }
            xhr.open("POST", "ajax_login.php")
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
            xhr.send(new URLSearchParams(formularioData).toString())
        }
    })
}
