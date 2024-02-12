# Exercícios HTML e JS no site:

## Site funcionando em outros dispositivos ✅

2) Altere o conteúdo da tag <b>h1</b> com: <code>document.querySelector</code> e atribua o seguinte texto: <code>Hora do Desafio.</code>

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

4) Crie uma função que exiba um alerta com a mensagem: <code>Eu amo JS</code>, sempre que o botão Alerta for pressionado.

```js
function alertButton (){
    alert('Eu amo JS <3');
}
```

5) Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: <code>Estive em {cidade} e lembrei de você.</code>

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