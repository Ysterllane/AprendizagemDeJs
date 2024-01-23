let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

/* let titulo = document.querySelector ('h1');
titulo.innerHTML = 'Jogo do Número Secreto';

let paragrafafo = document.querySelector('p');
paragrafafo.innerHTML = 'Escolha um número entre 1 e 100';*/

//Funçao com parâmetro
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirMensagemInicial();

//Funçao sem retorno e sem parâmetro
function verificarChute() {
    let chute = document.querySelector('input').value; // tipo boleano t/f

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');

        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = ('Você descobriu o número secreto com ' + tentativas + ' ' + palavraTentativa + '!');

        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor que ' + chute);
        }

        else {
            exibirTextoNaTela('p', 'O número secreto é maior que ' + chute);
        }

        tentativas++;
        limparcampo();
    }
}

//Funçao com retorno
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    }

    else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparcampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparcampo();
    tentativas = 1;
    exibirMensagemInicial();
    ocument.getElementById('reiniciar').setAttribute('disabled', true);
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10:');
}