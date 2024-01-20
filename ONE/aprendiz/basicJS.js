//Como exibir um pop up na tela:
alert ('Erro! Preencha todos os campos.');

//Declaração de variável:
let mensagemDeErro = 'Erro! Preencha todos os campos.';
alert (mensagemDeErro);

//Declaração de variável + escrever na tela:
let nome = prompt ('Qual o nome do usuário? ');
let idade = prompt ('Qual sua idede? ');

// Variável numéica não utiliza aspas
let numeroSecreto = 5 ;

//só é possível visualizar no navegador:
console.log ('');

//Comparação:
if (idade >= 18){
    alert ('Pode tirar a habilitação');
}

//se não
else {
    alert('Faltam alguns aninhos para tirar a carteira, mb :(');
}

//Escrever uma variável no texto{

//Template Strings
alert(`O número secreto é: ${numeroSecreto}`);

//+
alert('O número secreto era ' + numeroSecreto + ', mas você escolheu ' + chute); //}

//enquanto chute N FOR IGUAL ao numeroSecreto
while (chute != numeroSecreto){}

// Contador:
idade = idade + 1;
idade++;

idade = idade - 1;
idade--;

/* A função Math.random () em JavaScript gera um número decimal aleatório entre 0 (inclusivo) e 1 (exclusivo) de forma pseudo aleatória. Isso significa que os números gerados podem estar em qualquer lugar entre 0 (inclusive) e quase 1 (exclusivo), com uma precisão de até 16 casas decimais. A função Math.random usa um valor interno inicial que é geralmente baseado no horário atual do sistema, gerando números pseudo aleatórios.*/

//Para gerar um número entre 1 e 3, podemos usar o código: 
let numeroAleatorio1a3 = parseInt(Math.random() * 3) + 1;
