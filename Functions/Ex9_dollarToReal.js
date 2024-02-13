/* Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,95. */


function dollarToReal (dollar){
    let Real = dollar * 4.95;
    return Real.toFixed(2);
}

/* Chama a função */
let dollar = parseFloat(prompt("Qual o valor em dolares?"));

/* Armazena o retorno da função em realEquivalent*/
let realEquivalent = dollarToReal(dollar); 

alert("Seu valor em reais equivale a R$: " + realEquivalent);