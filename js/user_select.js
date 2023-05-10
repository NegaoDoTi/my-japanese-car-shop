function selectUser(element){
    if(element.value == 1){
        var confirmar = window.confirm("Realmete deseja sair ?")
        if(confirmar == true){
            window.location.href = "sair.html"
        }
        else{
            element.selectedIndex = -1
            return false
        }
    }
    if(element.value == 2){
        window.location.href = "loja.html"
    }
}