/* Crie uma função que calcule o valor do fatorial de um número */

function valorFatorial (){
    let calculoFatorial = parseInt(prompt('Digite um número para o calculo fatorial: '));
    let resultadoFatorial = 1;
    let n = 1;
    
    while (n <= calculoFatorial) {
        resultadoFatorial *= n; // Multiplica o resultado pelo valor atual de n
        n++;
    }
    return resultadoFatorial;
}

alert("Seu calulo fatorial é: " + valorFatorial());