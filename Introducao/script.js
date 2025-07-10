const titulo = document.getElementById("title")
const subtitulo = document.getElementsByClassName("subtitle")
const container = document.querySelector("#container")
const botao = document.getElementById("botao")

function botaoClicado() {
    console.log("Botao Clicado")
}


botao.addEventListener("click", botaoClicado)
