/* Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro */

function area_perimetro (h, largura){
    let area = h * largura;
    let perimetro = 2 * (h + largura);
    return { area: area.toFixed(2), perimetro: perimetro.toFixed(2) };
}

/* Chama a função */
let h = parseFloat(prompt("Qual a altura, em metros, da sala retangular?"));
let largura = parseFloat(prompt("Qual a largura, em metros, da sala retangular?"));

/* Armazena o retorno da função em resultados*/
let resultados = area_perimetro(h, largura);

/* Exibe o retorno da function
   Acessa as propriedades do objeto usando a notação de ponto (.):
   resultados.area nos dá o valor da área,
   resultados.perimetro nos dá o valor do perímetro. */
alert("A área da sala é " + resultados.area + " m² e o perímetro é " + resultados.perimetro + " m².");