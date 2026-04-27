// Mostre-me as seguintes listas, derivadas de: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// a) Números pares
// b) Números ímpares
// c) Todos os múltiplos de 2,3 e 4
// d) Lista reversa

// let numeros1: number[] = [0,1,2,3,4]
let numeros1:Array<number>=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

//length pecorre a lista e vê quantos tem ns lidts
for(let i = 0;i < numeros1.length; i++){
    if(numeros1[i] % 2 == 0){
        console.log("Par: "+ numeros1[i])

    }
    else{
        console.log("impares: "+ numeros1[i])
    }

}
for(let i=0; i < numeros1.length; i++){
    if(numeros1[i] % 2 === 0){
        console.log("Esses números são multiplos de 2: " + numeros1[i])
    }
    if(numeros1[i] % 3 === 0){
        console.log("Esses números são multiplos de 3: " + numeros1[i])
    }
    if(numeros1[i] % 4 === 0){
        console.log("Esses números são multiplos de 4: " + numeros1[i])
    }
}
// Inicia o loop no último índice do array (numeros1.length - 1)
// Percorre o array em ordem decrescente até o índice 0
// A variável i é decrementada a cada iteração (i--), garantindo a leitura reversa dos elementos
for(let i = numeros1.length - 1;i >= 0; i--){
    console.log(numeros1[i])

}
  