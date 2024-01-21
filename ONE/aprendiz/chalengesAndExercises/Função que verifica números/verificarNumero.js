//TERMINAR DPS:
let numero = parseFloat(prompt('Digite um número para verificação:'));

function verificarNumero(numero) {
    if (numero > 0) {
        console.log("O número é positivo.");
    } else if (numero < 0) {
        console.log("O número é negativo.");
    } else {
        console.log("O número é zero.");
    }
}



function verificarNumero() {
    let numero = parseInt(prompt('Digite um número para verificação:'));

    if (numero > 0) {
        console.log("O número é positivo.");
    } else if (numero < 0) {
        console.log("O número é negativo.");
    } else {
        console.log("O número é zero.");
    }
}