document.addEventListener("DOMContentLoaded", function() {
    logar()
    carregaConteudo()
})


function carregaConteudo(){
    var tbody = document.getElementsByTagName("tbody")
    var table = document.querySelector("table")
    var xhr = new XMLHttpRequest()
    xhr.open("GET", `ajax_admin_screen.php`)
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            var retorno = JSON.parse(xhr.response)
            for(i = 0; i< retorno.length; i++){
                var table_content = 
                (`
                    <tr>
                        <td>
                            ${retorno[i][0]}
                        </td>
                        <td>
                            ${retorno[i][1]}
                        </td>
                        <td>
                            ${retorno[i][2]}
                        </td>
                        <td>
                            ${retorno[i][3]}
                        </td>
                        <td>
                            ${retorno[i][4]}
                        </td>
                        <td>
                            ${retorno[i][5]}
                        </td>
                        <td>
                            ${retorno[i][6]}
                        </td>
                        <td>
                            ${retorno[i][7]}
                        </td>
                        <td>
                            ${retorno[i][8]}
                        </td>
                        <td>
                            <button id="btn_edit" onclick="modal_edit(${retorno[i][0]})">Editar</button>
                            <a onclick="deletes(${retorno[i][0]})">Excluir</a>
                        </td>
                    </tr>
                `)

                tbody[0].insertAdjacentHTML("beforeend", table_content)
            }
        }
    }
    xhr.send()
}



function redirect(){
    window.location.href = "http://localhost/responsive/login.html"
}

function sair(){
    var confirmar = window.confirm("Realmente deseja sair ?")
    if(confirmar === true){
        window.location.href = "sair.html"
    }
    else{
        return false
    }
}