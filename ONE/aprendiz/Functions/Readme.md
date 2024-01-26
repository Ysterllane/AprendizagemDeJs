# Functions:
## Sumário:
* Diferença de Funções

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