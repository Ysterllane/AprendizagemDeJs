/* O Deve fez o código e este entrava em loop infinito, pois a condição while nunca se tornava falsa
   Foi acrescentado a subtração no contador na linha 11 */

   let qtdNumeros = prompt('Digite a quantidade de números para o cálculo da média:');
   let soma = 0;
   let contador = qtdNumeros;
   
   while(contador > 0){
       let numero = parseInt(prompt('Digite o numero:'));
       soma += numero;
       contador--;
   }
   
   let media = soma / qtdNumeros;
   
   prompt('Sua média é: ' +media);
   
