function modal_edit(id){
    const modal = document.querySelector('div[id="edit"]')

    modal.addEventListener("click", (element) => {
        if(element.target.id == "x_edit" || element.target.id == "edit"){
                modal.classList.remove("open")
                modal.classList.add("closed")
                document.body.classList.remove("modal_opened")

                return false
        }
    })

    modal.classList.remove("closed")
    modal.classList.add('open')
    modal.scrollIntoView(true)
    document.body.classList.add("modal_opened")

    load_data(id)


}

function modal_insert(){
    const modal = document.querySelector('div[id="insert"]')
    modal.classList.remove("closed")
    modal.classList.add('open')
    modal.scrollIntoView(true)
    document.body.classList.add("modal_opened")

    modal.addEventListener("click", (element) => {
        if(element.target.id == "x_insert" || element.target.id == "insert"){
                modal.classList.remove("open")
                modal.classList.add("closed")
                document.body.classList.remove("modal_opened")
        }
    })

}

function load_data(id){
    var xhr = new XMLHttpRequest()
    xhr.open("POST", `ajax_carro.php`)
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            var retorno = JSON.parse(xhr.response)

            document.getElementById("id").value = retorno.id
            document.getElementById("nome").value = retorno.nome
            document.getElementById("marca").value = retorno.marca
            document.getElementById("modelo").value = retorno.modelo
            document.getElementById("cor").value = retorno.cor 
            document.getElementById("km").value = retorno.km
            document.getElementById("ano").value = retorno.ano
            document.getElementById("preco").value = retorno.preco
            document.getElementById("caminho").value = retorno.caminho
        }
    }
    xhr.send(id)
}


function update(){

    var dados = {
        "id" : document.getElementById("id").value,
        "nome" : document.getElementById("nome").value,
       "marca" : document.getElementById("marca").value,
        "modelo" : document.getElementById("modelo").value,
        "cor" : document.getElementById("cor").value,
        "km" : document.getElementById("km").value,
        "ano" : document.getElementById("ano").value,
        "preco" : document.getElementById("preco").value,
        "caminho" : document.getElementById("caminho").value
    }

    var xhr = new XMLHttpRequest()
    xhr.open("POST", `ajax_update_carro.php`)
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            var retorno = JSON.parse(xhr.response)
            if(retorno.mensagem == true){
                window.alert("Item editado!")
                window.location.reload()
            } 
            else{
                window.alert("Erro a editar item!")
                window.location.reload()
            }
        }
    }
    xhr.send(JSON.stringify(dados))
}



function insert(){

    var dados = {
        "nome" : document.getElementById("insertNome").value,
       "marca" : document.getElementById("insertMarca").value,
        "modelo" : document.getElementById("insertModelo").value,
        "cor" : document.getElementById("insertCor").value,
        "km" : document.getElementById("insertKm").value,
        "ano" : document.getElementById("insertAno").value,
        "preco" : document.getElementById("insertPreco").value,
        "caminho" : document.getElementById("insertCaminho").value
    }

    var xhr = new XMLHttpRequest()
    xhr.open("POST", `ajax_inserir_carro.php`)
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            var retorno = JSON.parse(xhr.response)
            if(retorno.mensagem == true){
                window.alert("Novo carro inserido")
                window.location.reload()
            } 
            else{
                window.alert("Erro ao inserir novo carro!")
                window.location.reload()
            }
        }
    }
    xhr.send(JSON.stringify(dados))
}


function deletes(id){
    confirmar = window.confirm("Deseja realmente excluir este carro ?")
    if(confirmar == false){
        return false
    }
    
    dados = {
        "id" : id
    }

    var xhr = new XMLHttpRequest()
    xhr.open("POST", `ajax_delete_carro.php`)
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            var retorno = JSON.parse(xhr.response)
            if(retorno.mensagem == true){
                window.alert("Carro deletado com sucesso!")
                window.location.reload()
            } 
            else{
                window.alert("Erro ao deletar carro!")
                window.location.reload()
            }
        }
    }
    xhr.send(JSON.stringify(dados))

}