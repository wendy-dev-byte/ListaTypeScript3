// 1. Crie um programa que peça números até o usuário digitar 0 e mostre:
//  Quantidade de números digitados
//  Soma total

export function questao1 (): void{
let op =  -1; let cont = 0; let acum = 0
    while(op != 0){
        op = Number(prompt('Digite números'))
        cont++
        acum += op

    }
console.log("Quantidade de números: " + cont)
console.log('A soma dos números: ' + acum)
}