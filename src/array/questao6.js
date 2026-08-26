"use strict";
// 6. Crie um Array vazio que irá armazenar 15 nomes de pessoas (usando laço de repetição);
// a) Pedir os nomes das pessoas usando o Prompt e o método push();
// b) Apresentar os nomes digitados;
// c) Ordenar o vetor usando o sort();
// d) Apresentar os nomes inseridos de forma ordenada.
let nomes = [];
for (let i = 0; i < 15; i++) {
    let nome = prompt("Quais são os 15 nomes?");
    // se clicar em cancelar vira null, então paro o programa
    if (nome === null) {
        break;
    }
    nomes.push(nome);
}
console.log("Nomes digitados: ");
console.log(nomes);
nomes.sort();
console.log("Nomes ordenados:");
console.log(nomes);
