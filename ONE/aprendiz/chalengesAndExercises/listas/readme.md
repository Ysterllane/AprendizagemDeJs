# No console.log fizemos alguns testes:

Crimaos uma lista que se dá pela criação da variável = [ itens da lista ];

```js
let numeros = [1,5,9];
```

Pedimos os números:

```js
numeros //enter
(3) [1, 5, 9]; // resposta do console.log
```
Para saber a quantidade de números:

```js
numeros.length; //enter
3 // resposta do console
```

"Número na posição 0"

```js
numeros[0]; //enter
1 // resposta do console
```

Para saber o elemento da última posição da lista:

```js
numeros[numeros.length - 1]; // enter
5 //resposta do console
````

## Por que isso funciona?
Porque o índice começa com o valor zero, se diminuirmos o tamanho da lista em 1, obteremos o último elemento da lista. 

Como tamanho de lista é 3, numeros.length - 1 é como 3 - 1, que é igual a 2 , ou seja, temos o índice 2. Ficou igual ao numeros[2], que também retorna 3.
