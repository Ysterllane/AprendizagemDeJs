/*Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador*/

let contador = prompt('Digite um número positivo para iniciar a contagem regressiva: ');

while(contador >= 0){
    console.log('Numero: ' +contador);
    contador--;
}