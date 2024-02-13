# Functions:

## Sumário:

* Lista de Exercícios:
* Diferença de Funções

## Exercícios:

1) Criar uma função que exibe "Olá, mundo!" no console.
2) Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
3) Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
4) Criar uma função que recebe três números como parâmetros e retorna a média deles.
5) Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
6) Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
7) Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
8) Crie uma função que calcule o valor do fatorial de um número.
9) Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
10) Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

## Diferença de Funções:

🔴 <u>SEM RETORNO E SEM PARÂMETRO</u>: <code>function saudacao() { ... }</code>	( Execução de bloco de código simples. )

🟠 <u>SEM RETORNO E COM PARÂMETRO</u>: <code>function cumprimentar(nome) { ... };</code>	( Execução de bloco de código com argumentos = cada parâmetro de uma function.)

🟡 <u>COM RETORNO E SEM PARÂMETRO</u>: <code>function gerarNumeroAleatorio() { ... };</code>	( Cálculo e retorno de um valor específico. )

🟢 <u>COM RETORNO E COM PARÂMETRO</u>: <code>function somar(a, b) { ... };</code>	(Cálculo e retorno baseado em argumentos = cada parâmetro de uma function.)

🔵 <u>FUNÇÃO ANÔNIMA</u>:	<code>let saudacao = function() { ... };</code>	( Definição de função sem nome localmente )

🟣 <u>ARROW FUNCTION</u>: Definição concisa de funções curtas.
* Função Tradicional:

```js
function soma(a, b) {
  return a + b;
}
```

* Arrow Function:
```js
const soma = (a, b) => a + b;
```
