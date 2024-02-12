/* Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem. */

let num = parseFloat(prompt("Digite um numero: "));

if (num > 0){
    alert("Seu número é positivo <3");
} else if (num == 0){
    alert("Seu número é zero <3");
} else {
    alert("Seu número é negativo <3");
}