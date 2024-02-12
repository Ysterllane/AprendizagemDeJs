/* Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.*/

let numero = prompt('Digite um número para iniciar a contagem progressiva: ');

let contador = 0;

while(contador <= numero){
    console.log('Numero: ' +contador);
    contador++;
}