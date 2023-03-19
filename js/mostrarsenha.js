function mostrarsenha(){
    var botao = document.getElementById("mostrarsenha")
    var arrinputsenha = document.body.getElementsByClassName("inputsenha")

    if (botao.checked == true){
        for (var i = 0; i < arrinputsenha.length; i++){
            arrinputsenha[i].type = "text"
        } 
    }else{
        for (var i = 0; i < arrinputsenha.length; i++){
            arrinputsenha[i].type = "password"
        } 
    }
}