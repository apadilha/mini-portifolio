/***
 * Author...:Alex
 * Criado...:14/10/22
 * 
 * Description: Quando clicar na aba mostre o conteudo da aba clicado 
 *              e esconda o conteudo da aba anterior.
 * 
 *              Passo 1:   Dar um jeito de pegar os elementos que representam
 *                         o HTML.
 *              Passo 2:   Dar um jeito de identificar o clique no elemento da aba.
 *              Passo 2.1: Quando o usuario clicar, desmarca a aba selecionada
 *              Passo 4:   Marcar a aba clicanda como selecionado
 *              Passo 5:   Esconder o conteudo anterior
 *              Passo 6:   Mostrar o conteudo da aba selecionada
*/

//1
//console.log(document.querySelectorAll(".inf-1"));
const abas = document.querySelectorAll(".div-gif");

//2
//
abas.forEach(aba => {
    aba.addEventListener("click", function() {
        //console.log("oi");

        if(aba.classList.contains("selecionado")){
            return;
        }

        selecionaraba(aba);        
        mostrarInforAba(aba);
    });
});

function selecionaraba(aba){
        //3
        //
        const abaSelecionada = document.querySelector(".div-gif.selecionado");
        abaSelecionada.classList.remove("selecionado")        

        //4
        //
        aba.classList.add("selecionado");
}

function mostrarInforAba(aba){
    //5
    //
    const infSelecionada = document.querySelector(".inf-1.selecionado");
    console.log(infSelecionada);
    infSelecionada.classList.remove("selecionado");

    //6
    //
    const idElementoAba = `Sub-${aba.id}`;
    console.log(aba.id);
    console.log(idElementoAba);
    
    const infMostrada = document.getElementById(idElementoAba);    
    infMostrada.classList.add("selecionado");
}


