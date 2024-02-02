// 4) Criar uma função que recebe três números como parâmetros e retorna a média deles

function mediaD3num () {
    let num1 = parseInt( prompt('Digite um número: ') );
    let num2 = parseInt( prompt('Digite um  2° número: ') );
    let num3 = parseInt( prompt('Digite um 3° número: ') );

    let media = (num1 + num2 + num3) / 3;

    return media;
}

console.log(mediaD3num());