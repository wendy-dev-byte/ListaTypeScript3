// 3. Faça um programa que leia nome, horas trabalhadas, salário-hora e sexo de um grupo de
// operários. Ao final de cada solicitação pergunte se o usuário quer continuar ou não o
// programa.
// Calcule e imprima:
// ● Salário total dos funcionários, o maior salário, juntamente com o nome de quem o
// recebeu;
// ● O número de funcionários do sexo masculino e feminino cadastrado;
// ● O percentual de funcionários homens e mulheres cadastrados.


let conttF = 0; let conttM = 0; let acumSalario = 0; let maiorSalari = 0; let nomedomaiorsalario = ""; let contgeral = 0; let salarioTotal= 0

let op: number = 0

while(op != -1){
    
    let nome = String(prompt("Qual seu nome? "))
    let horas = Number(prompt("Por quantas horas você trabalhar? "))
    let salario = Number(prompt("Qual o valor do seu salário? "))
    let sexo = String(prompt("Qual seu gênero?")).toUpperCase()
    

    salarioTotal = salario*horas
    acumSalario += salarioTotal
    
    contgeral++
    if(sexo === "Femino"){
        conttF++
    }
    if(sexo === "Masculino"){
        conttM++
    }
    if(salario > maiorSalari){
        maiorSalari = salario
        nomedomaiorsalario = nome
    }

    op = Number(prompt("Gostaria de continuar? (-1 = parar e -2 continuar)"))
}

let percentualM = (conttM/contgeral)*100
let percentualF = (conttF/contgeral)*100

console.log(`Salário Total: ${acumSalario}`)
console.log(`Maior Salário: ${maiorSalari} - ${nomedomaiorsalario}`)
console.log(`Feminino: ${conttF}`)
console.log(`Masculino: ${conttM}`)
console.log(`Percentual Masculino ${percentualM.toFixed(2)}%`)
console.log(`Percentual Feminino ${percentualF.toFixed(2)}%`)
















