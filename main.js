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





const subtrair = document.querySelector("#subtrair")
const somar = document.querySelector("#somar")
const braco = document.querySelector("#braco")

const controle = document.querySelector(".controle-ajuste")

controle.forEach((elemento) => {
    elemento.addEventListener("click", () => {
        console.log(evento.target)
    })
})


function manipulaDados(operacao) {
    if (operacao === "-") {
        braco.value = parseInt(braco.value) -1
    } else {
        braco.value = parseInt(braco.value) +1
    }
}

