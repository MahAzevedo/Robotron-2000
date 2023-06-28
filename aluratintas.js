//const button = document.querySelector("#button")


/* Desafio: utilização do data-attribute em funções.
   Criar um botão que, ao ser clicado, faz aparecer esta lista, 
   e também criará um segundo botão que, 
   ao ser clicado, 
   faz com que a lista de cores volte a sumir.
*/

/*
const botaoMostrarLista = document.querySelector("[botao=mostrarLista]")

const botaoRemoverLista = document.querySelector("[botao=removerLista]")

botaoMostrarLista.addEventListener("click", () => {
    manipulaDados("[botao=mostrarLista]")
})

botaoRemoverLista.addEventListener("click", () => {
    manipulaDados("[botao=removerLista]")
})

function manipulaDados(operacao) {
    if(operacao === "[botao=mostrarLista]") {
        document.querySelector(".lista").style.display = "block"
    } else {
        document.querySelector(".lista").style.display = "none"
    }
}*/


/*
const lista = document.querySelector('[data-lista="mostrar"]');
document.querySelector("#botao").addEventListener("click", () => {
  lista.setAttribute([data-lista=mostrar]);
});

document.querySelector(".close").addEventListener("click", () => {
  lista.setAttribute([data-lista=esconder]);
}); 

const mostraLista = document.querySelector('[data-lista="mostrar"]');
document.querySelector()

const escondeLista = document.querySelector('[data-lista="esconder"]')

function mostraLista(click) {
    if(click === '[data-lista="mostrar"]') {
        document.querySelector('[data-lista="mostrar"]').style.display = "block";
    } else {
        document.querySelector('[data-lista="esconder"]').style.display = "none";
    }
    
}
*/



//--------

/*
const mostrar = document.querySelector("#mostrar")
const esconder = document.querySelector("#esconder")
//const lista = document.querySelector("#lista")


mostrar.addEventListener("click", () => {
    lista.style.display = "block";
})

esconder.addEventListener("click", () => {
    lista.style.display = "none";
})

//lista.addEventListener("click", () => {})
/*
function mostraEscondeLista(click) {
    if (click === "mostrar") {
        document.querySelector('[data-lista="mostrar"]').style.display = "block";
    } else {
        [data-lista="esconder"] 
    }      
}

mostraTintas = mostraEscondeLista;
*/

/*
function mostraEscondeLista(click) {
    if (click === "mostrar") {
        console.log("mostrou??")
    } else (click > 1 "none") {
        console.log("fescondeu??")
    }
}
*/


/*
  function mostraEscondeLista() {
    const mostrar = document.querySelector("#mostrar").classList.toggle('[data-lista="mostrar"]');
    const esconder = document.querySelector("#esconder").classList.toggle('[data-lista="esconder"]');
    const lista = document.querySelector("#lista").classList.toggle('[data-lista="mostrar"]');
  }

*/









//var acc = document.getElementsByClassName("accordion");
//var i;

/*
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    /* Alternar entre adicionar e remover a classe "ativa",
    para destacar o botão que controla o painel */
   // this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    /* Alternar entre ocultar e mostrar o painel ativo */
  //  var panel = this.nextElementSibling;
 //   if (panel.style.display === "block") {
 //     panel.style.display = "none";
  //  } else {
 //     panel.style.display = "block";
 //   }
 //});
//}
//*/

/*
const mostrarEsconder = document.querySelector("mostrarEsconder");
const i;

for (i = 0; i < mostrarEsconder.length; i++) {
    mostrarEsconder[i].addEventListener("click", () => {
        this.id.toggle("active");
    })

    const mostrarEsconder= this.nextElementSibling;
    if (mostrarEsconder.style.display === "block") {
        mostrarEsconder.style.display = "none";
    } else {
        mostrarEsconder.style.display = "block";
    }
}
*/

const mostrarEsconder = document.getElementsByClassName("bosta");
let i;

for (i = 0; i < mostrarEsconder.length; i++) {
  mostrarEsconder[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var lista = this.nextElementSibling;
    if (lista.style.display === "block") {
      lista.style.display = "none";
    } else {
      lista.style.display = "block";
    }
  });
}
