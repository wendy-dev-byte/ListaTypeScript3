"use strict";
// Crie um programa que solicite dois números e simule um menu de uma calculadora:
// 1 - Soma
// 2 - Subtração
// 3 - Multiplicação
// 4 - Divisão
// Use switch...Case
let opcao = Number(prompt("Qual a operação gostaria de fazer? (1 - Soma, 2 - Subtração, 3 - Multiplicação, 4 - divisão"));
let num1 = Number(prompt("Digite um número: "));
let num2 = Number(prompt("Digite outro número: "));
switch (opcao) {
    case 1:
        console.log("A soma dos números:" + (num1 + num2));
        break;
    case 2:
        console.log("A subtração dos números:" + (num1 - num2));
        break;
    case 3:
        console.log("A multiplicação dos números:" + (num1 * num2));
        break;
    case 4:
        console.log("A divisão dos números: " + (num1 / num2));
}
