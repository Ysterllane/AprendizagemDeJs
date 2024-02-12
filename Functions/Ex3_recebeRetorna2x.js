// 3) Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function recebeRetorna2x() {
    let number = prompt('Digite um número: ');

    // Retorno do dobro do número:
    return number * 2;
}

// N se pode chamar a função dentro da função
console.log(recebeRetorna2x());
