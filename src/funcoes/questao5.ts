// 5. Crie uma função que recebe dois números: início e fim. Depois use um laço para percorrer
// esse intervalo e imprimir apenas os números que são múltiplos de 3.

let lista: Array<number> = []
function multiplos3(){
   let numeros:number = Number(prompt("Digite números:"))
    if(numeros % 3 === 0){
        lista.push(numeros)
    }
}
console.log('Números multiplos de 3: ' + lista)
multiplos3()