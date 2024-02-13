/*  7) Crie uma função em javascript que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro e mostre com um alert */

function IMC() {
    let peso = parseFloat(prompt("Qual seu peso em kg?"));
    let altura = parseFloat(prompt("Qual sua altura em metros?"));

    let indice = peso / (altura * altura);
    return indice.toFixed(2); // Arredondando o IMC para duas casas decimais
}

alert("Seu índice de massa corporal (IMC) é: " + IMC());
