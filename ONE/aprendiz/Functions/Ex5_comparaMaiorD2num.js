// 5) Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function comparaMaiorD2num (){
    let n1 = parseInt( prompt('Digite um número: ') );
    let n2 = parseInt( prompt('Digite outro número: ') );
    if (n1 > n2) {
        return n1;
    } else {
        return n2;
    }
}

alert (' O maior número é: ' + comparaMaiorD2num());