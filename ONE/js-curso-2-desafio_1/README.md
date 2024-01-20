# Exercícios HTML e JS:

2) Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.

```js
let titulo =  document.querySelector ('h1');
titulo.innerHTML = 'Hora do Desafio:';
```

3) Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.

```js
function consoleButton (){
    console.log('O botão foi clicado');
}
```

4) Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.

```js
function alertButton (){
    alert('Eu amo JS <3');
}
```

5) Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

```js
function promptButton (){
   let cidadeBrasileira = prompt ('Diga o nome de uma cidade brasileira que goste: ');
   alert ('Estive em '+ cidadeBrasileira + ' e lembrei de você <3')
}
```

6) Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta.

```js
function somaButton (){
    let n1 = parseInt(prompt('Digite um número: '));
    let n2 = parseInt(prompt('Digite outro número: '));
    let soma = n1 + n2;
    alert('Sua soma é: ' + soma);
}
```