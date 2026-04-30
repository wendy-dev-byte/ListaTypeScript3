// Crie uma função que recebe um valor de saque (inteiro). A função deve dizer quantas notas
// de 50, 20 e 10 são necessárias para o saque (priorizando as maiores). Use um laço while
// para ir subtraindo do valor total.

export function questao4(): void{
function saque (inteiro: number){
    let Q50 = 0, Q20 = 0, Q10 = 0
    while(inteiro >= 10){
          if(inteiro > 50){
            Q50++
        }
        else if(inteiro <=  49 && inteiro >= 20){
            inteiro -= 20
            Q20++
        }
        else{
            inteiro -=10
            Q10++
        }
 
    }
    console.log(`Nota de 50:${Q50}`)
    console.log(`Nota de 20:${Q20}`)
    console.log(`Nota de 10:${Q10}`)
}
let inteiro = Number(prompt("Qual é o valor do saque?"))
saque(inteiro)
}