"use strict";
// 4. Ler dois valores e imprimir uma das três mensagens a seguir:
// ● ‘Números iguais’, caso os números sejam iguais;
// ● ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// ● ‘Segundo maior’, caso o segundo seja maior que o primeiro.
let numero1 = Number(prompt("Digite um número:"));
let numero2 = Number(prompt("Digite outro número: "));
if (numero1 == numero2) {
    console.log("Números iguais");
}
else if (numero1 > numero2) {
    console.log("Primeiro é maior");
}
else {
    console.log("Segundo maior");
}
