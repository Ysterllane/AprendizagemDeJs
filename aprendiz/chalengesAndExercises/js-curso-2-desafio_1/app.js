let titulo =  document.querySelector ('h1');
titulo.innerHTML = 'Challenge Time:';

function consoleButton (){
    console.log('O botão foi clicado');
}

function alertButton (){
    alert('Eu amo JS <3');
}

function promptButton (){
   let cidadeBrasileira = prompt ('Diga o nome de uma cidade brasileira que goste: ');
   alert ('Estive em '+ cidadeBrasileira + ' e lembrei de você <3')
}

function somaButton (){
    let n1 = parseFloat(prompt('Digite um número: '));
    let n2 = parseFloat(prompt('Digite outro número: '));
    let soma = n1 + n2;
    alert('Sua soma é: ' + soma);
}
