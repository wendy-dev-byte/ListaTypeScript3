"use strict";
// 8. Controle de Estoque de Loja (Loop e Relatório)
// Faça um programa que gerencie a entrada de produtos em um estoque. O programa deve solicitar o
// preço unitário do produto e a quantidade comprada.
//  Crie uma função que recebe preço e quantidade. Se a quantidade for maior que 10 unidades,
// aplica 5% de desconto sobre o valor total daquele item. Retorna o valor final.
//  O programa deve repetir a solicitação até que o preço informado seja zero.
//  Ao encerrar, exiba o total geral investido no estoque e a média de preço dos produtos
// cadastrados.
function controle(preco, quantidade) {
    let valor = preco * quantidade;
    if (quantidade > 10) {
        let desconto = (5 / 100) * valor;
        return valor - desconto;
    }
    else {
        return valor;
    }
}
let preco = Number(prompt('Qual foi o valor  unitário do item?'));
let contt = 0;
let acumpreco = 0;
while (preco != 0) {
    let quantidade = Number(prompt('Qual foi a quantidade de produtos?'));
    let controle1 = controle(preco, quantidade);
    acumpreco += controle1;
    contt++;
    preco = Number(prompt('Qual foi o valor  unitário do item?'));
}
let media = acumpreco / contt;
console.log(`Total envestido:${acumpreco}`);
console.log(`Total da média:${media}`);
