# Codes de Aprendizagem - basicJS
## Sumário:
* Exibir pop up na tela
* Declaração de variáveis
* Escrever na tela
* console.log
* If, else
* Formas de mostrar variável com texto
* while, contador ++
* != (não for igual)
* && and
* || or 
* Math.random ();

## Explicação:

Como exibir um pop up na tela:
```js
alert ('Wello world!');
```

Declaração de variável:
```js
let mensagemDeErro = 'Erro! Preencha todos os campos.';
alert (mensagemDeErro);
```

Declaração de variável + escrever na tela:
```js
let nome = prompt ('Qual o nome do usuário? ');
let idade = prompt ('Qual sua idede? ');
```

Variável numéica não utiliza aspas:
```js
let numeroSecreto = 5 ;
```

Só é possível visualizar no console do navegador:
```js
console.log ('');
```

Comparação:
```js
if (idade >= 18){
    alert ('Pode tirar a habilitação');
}

// se não
else {
    alert('Faltam alguns aninhos para tirar a carteira, mb :(');
}
```

Escrever uma variável no texto:

-> Template Strings
```js
alert(`O número secreto é: ${numeroSecreto}`);
```
Com + :
```js
alert('O número secreto era ' + numeroSecreto + ', mas você escolheu ' + chute);
```
Comparar valores:
```js 
== 
```

Atribuir valores:
```js 
= 
```

Enquanto chute N FOR IGUAL ao numeroSecreto:
```js
while (chute != numeroSecreto){}
```

Contador:
```js
idade = idade + 1;
idade++;

idade = idade - 1;
idade--;
```

A função:
```js 
Math.random (); 
``` 
em JavaScript gera um número decimal aleatório entre 0 (inclusivo) e 1 (exclusivo) de forma pseudo aleatória. Isso significa que os números gerados podem estar em qualquer lugar entre 0 (inclusive) e quase 1 (exclusivo), com uma precisão de até 16 casas decimais. A função Math.random usa um valor interno inicial que é geralmente baseado no horário atual do sistema, gerando números pseudo aleatórios.

Para gerar um número entre 1 e 3, podemos usar o código: 
```js
let numeroAleatorio1a3 = parseInt(Math.random() * 3) + 1;
```
