//document.getElementById("#producao").innerHTML='Mad'
//console.log('Gustavo Pergola ama Mádjan, Mádjan ama Gustavo Pergola')



//const robotron = document.querySelector("#robotron")


/*
robotron.addEventListener("click", (evento) => { // arrow function, funcao de seta, funcao vazia
    //console.log(evento)
})

// isso aqui é um bloco de código
function dizOi(nome) {
    console.log("oi " + nome)
    console.log("Gustavo lindo!!!")
}

dizOi("Mad")  //para chamar a funcao assim que a pagina abre, é a primeira coisa que aparece
*/








const controle = document.querySelectorAll("[data-controle]")

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
    })
})


function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")

    if (operacao === "-") {
        peca.value = parseInt(peca.value) -1
    } else {
        peca.value = parseInt(peca.value) +1
    }
}
 


















