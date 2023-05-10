document.addEventListener("DOMContentLoaded", function() {
    logar()
    buscarBaseDados()
})
function buscarBaseDados(){
    var xhr = new XMLHttpRequest()
    xhr.open("GET", `ajax_consulta_carros.php`)
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            var retorno = JSON.parse(xhr.response)
            if(retorno.mensagem == false){
                window.alert("Erro ao carregar carros, por favor verifique se o serviço está disponível!")
                window.location.reload()
                return false
            }
            if(retorno.mensagem == true){
                for(let i = 0; i < retorno.dados.length; i++){
                    var produtos = document.getElementById("produtos")
                    var dadosCarros = 
                    `
                    <div class="carros">
                        <img src="${retorno.dados[i][3]}" alt="">
                        <span class="precos">R$: ${retorno.dados[i][2]}</span>
                        <span>${retorno.dados[i][1]}</span>
                        <a href="carro.html?id=${retorno.dados[i][0]}">COMPRAR</a>
                    </div>
                    `
                    produtos.insertAdjacentHTML("beforeend", dadosCarros)
                }
            }
        }
    }
    xhr.send()
}