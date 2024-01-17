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

//Escrever uma variável no texto: 

//Template Strings
alert(`O número secreto é: ${numeroSecreto}`);

//+
alert('O número secreto era ' + numeroSecreto + ', mas você escolheu ' + chute);


