// Jogo de advinhação do número secreto:
// Finalizado: 19/01/2024

alert('Boas-vindas ao jogo do número secreto!');

let ate = 10;

//geração de número aleatório inteiro com uma função
let numeroSecreto = parseInt(Math.random() * ate + 1);
console.log(`O número secreto é: ${numeroSecreto}`);
let chute;                      // Operador ternário
let tentativas = 1;

//enquanto chute N FOR IGUAL ao numeroSecreto
while (chute != numeroSecreto) {
  chute = prompt('Escolha um número entre 1 e ' + ate + ':');

  if (chute == numeroSecreto) {
    break; // interrompe o while

  } //se não
  else {
    if (chute > numeroSecreto) {
      alert('O número secreto é menor que ' + chute);
    } else {
      alert('O número secreto é maior que ' + chute);
    }
    // tentativas = tentativas + 1;
    tentativas++;
  }
}
// caso tentativas seja maior q 1 'tentativas'
// se n : 'tentativa
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso aí! Você descobriu o número secreto (${numeroSecreto}), com ${tentativas} ${palavraTentativa} <3`);

/* msm coisa q o operador só que com if else
   Template Sring
if (tentativas > 1){
  alert(`Isso aí! Você descobriu o número secreto (${numeroSecreto}), com ${tentativas} tentativas <3`);
} else {
  alert(`Isso aí! Você descobriu o número secreto (${numeroSecreto}), com ${tentativas} tentativa <3`);
}*/

