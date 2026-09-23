// 8. Uma empresa precisa de um sistema simples para cadastrar seus funcionários. O sistema deve solicitar
// ao usuário o nome, o cargo e o salário de vários funcionários. Para cada funcionário cadastrado, deve
// ser criado um objeto que armazene essas informações. Ao final, o sistema deve exibir um resumo de
// todos os funcionários cadastrados, utilizando um método da classe.

export function questao8():void{
class Sistema{
    nome:string
    cargo:string
    salario:number
    constructor(nome:string,cargo:string,salario:number){
        this.nome = nome
        this.cargo = cargo
        this.salario = salario
    }
    exibirfuncionario():void{
        console.log("Nome do funcionário" + this.nome)
        console.log(`cargo:${this.cargo}`)
        console.log("Salário: "+ this.salario)

}
}
let funcionarios: Sistema[] = []


let op = 0


while(op != -1){
    let nome:string = String(prompt("Qual seu nome?"))
    let cargo:string = String(prompt("Qual seu cargo?"))
    let salario:number = Number(prompt("Qual seu salário?"))
   


let funcionario = new Sistema(nome,cargo,salario)
    funcionarios.push(funcionario)


op = Number(prompt("Deseja continuar(0 - Não, 1 = Sim)?"))
}


for(let funcionario of funcionarios){
        funcionario.exibirfuncionario()
}
}