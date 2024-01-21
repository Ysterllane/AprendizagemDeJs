/* let titulo = document.querySelector ('h1');
titulo.innerHTML = 'Jogo do Número Secreto';

let paragrafafo = document.querySelector('p');
paragrafafo.innerHTML = 'Escolha um número entre 1 e 100';*/

let numeroSecreto = gerarNumeroAleatorio();

//Funçao com parâmetro
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do Número Secreto' );
exibirTextoNaTela('p', 'Escolha um número entre 1 e 100:');

//Funçao sem retorno e sem parâmetro
function verificarChute() {
    let chute = document.querySelector('input').value
    console.log(chute == numeroSecreto);
}

//Funçao com retorno
function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 100 + 1);
}