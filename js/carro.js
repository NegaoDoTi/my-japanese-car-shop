document.addEventListener("DOMContentLoaded", function() {
    buscarCarro()
    logar()
})
function buscarCarro(){
    var link = window.location.href.split("=")
    var xhr = new XMLHttpRequest()
    xhr.open("POST", `ajax_carro.php`)
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            var retorno = JSON.parse(xhr.response)
            if(retorno.mensagem == false || retorno.pagina !== false){
                window.alert("Carro não encontrado, selecione outro!");
                window.location.href = retorno.pagina;
            }
            if(retorno.mensagem == true && retorno.pagina === false){
                document.title = retorno.nome
                var divCarro = document.getElementById("carro")
                divCarro.innerHTML = `
                <div id="img" class="infos">
                    <img id="imgCarro" src="${retorno.caminho}" alt="carro_image">
                </div>
                <div class="infos">
                    <div id="form" class="form">
                        <label for="nome">NOME: </label>
                        <span id ="nome">${retorno.nome}</span>
                        <br>
                        <label for="marca">MARCA: </label>
                        <span id="marca">${retorno.marca}</span>
                        <br>
                        <label for="modelo">MODELO: </label>
                        <span id="modelo">${retorno.modelo}</span>
                        <br>
                        <label for="cor">COR: </label>
                        <span id="cor">${retorno.cor}</span>
                        <br>
                        <label for="ano">ANO: </label>
                        <span id="ano">${retorno.ano}</span>
                        <br>
                        <label for="km">KM: </label>
                        <span id="km">${retorno.km}</span>
                        <br>
                        <span style="font-size: xx-large;">R$ ${retorno.preco}</span>
                        <br>
                        <a href="compra.html?id=${retorno.id}">COMPRAR</a>
                    </div>
                    <div class="carrosInfos">
                        <span>Horario de atendimento:</span>
                        08:00 as 20:00.
                    </div>
                </div>

                `

            }
        }
    }
    xhr.send(link[1])
}