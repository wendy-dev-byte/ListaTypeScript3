// 2. Desenvolva a tabuada de um número usando for.

export function questao2(): void{

for(let i = 0; i < 10; i ++){
    let digite:number = Number(prompt("Digite um número?"))
    console.log(digite + "x" + digite*i)
}
}