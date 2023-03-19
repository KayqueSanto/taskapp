function trocapagina(){
    var arrmain = document.body.getElementsByTagName("main")

    var formlogin = arrmain[0]
    var displayformlogin = window.getComputedStyle(formlogin)

    var formcadastro = arrmain[1]
    var displayformcadastro = window.getComputedStyle(formcadastro)

    if (displayformlogin.display == "flex"){
        formcadastro.style.display = "flex"
        formlogin.style.display = "none"
    }else if (displayformcadastro.display == "flex"){
        formcadastro.style.display = "none"
        formlogin.style.display = "flex"
    }
}