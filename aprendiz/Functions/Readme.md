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
