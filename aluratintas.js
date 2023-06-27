//const button = document.querySelector("#button")


/* Desafio: utilização do data-attribute em funções.
   Criar um botão que, ao ser clicado, faz aparecer esta lista, 
   e também criará um segundo botão que, 
   ao ser clicado, 
   faz com que a lista de cores volte a sumir.
*/

const lista = document.querySelector("ul");
document.querySelector("#botao").addEventListener("click", () => {
  lista.setAttribute("data-lista", "mostrar");
});

document.querySelector(".close").addEventListener("click", () => {
  lista.setAttribute("data-lista", "esconder");
}); 

function mostraLista(evento) {
    if(evento === click) {
        data-lista="mostrar";
    } else {
        data-lista="esconder";
    }
    console.log("a funcao foi chamada")
}

