
alert('Boas-vindas ao jogo do número secreto!');
let numeroSecreto = 5 ;
console.log(`O número secreto é: ${numeroSecreto}`);
let chute = prompt ('Escolha um número entre 1 e 10: ');

//Template Strings
if (chute == numeroSecreto) {
    alert(`Isso aí! Você descobriu o número secreto (${numeroSecreto})`);
}

//se não
else {
  if (chute > numeroSecreto){
    alert ('O número secreto é menor que ' + chute);
  } else{
    alert('O número secreto é maior que ' + chute);
  }
}