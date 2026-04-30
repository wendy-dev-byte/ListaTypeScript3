// 4. Faça um programa que leia um conjunto de números (X) e imprima a quantidade de
// números pares (QPares) e a quantidade de números ímpares (QImpares) lidos. Admita que o
// valor -1 é utilizado como sentinela para fim de leitura.
export function questao4():void{

let op = 1; let Qpares = 0; let QImpares = 0
while(op != -1){
    op = Number(prompt("Digite números: (-1 para parar)"))
    if(op % 2 === 0){
        Qpares ++
    }
    else{
        QImpares ++
    }
}
console.log("Pares: " + Qpares)
console.log("Impares: "+ QImpares)



}