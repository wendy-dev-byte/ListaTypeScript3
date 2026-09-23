

// 15. Herança Encapsulamento
// Uma empresa possui dois tipos de funcionários: horistas (pagos por hora trabalhada) e assalariados
// (salário fixo mensal). Crie uma hierarquia de classes com Funcionário como superclasse e
// FuncionarioHorista e FuncionarioAssalariado como subclasses. O programa deve solicitar os dados via
// teclado e calcular o salário de cada um.


export function questao15():void{


abstract  class Funcionario{
    nome:string
    private _valorPorHora:number
    constructor(nome:string,_valorPorHora:number){
        this.nome = nome
        this._valorPorHora = _valorPorHora
    }
    getvalorHora(): number{
        return this._valorPorHora
    }
}
class Horistas  extends Funcionario{
    hora:number
    constructor(nome:string,salario:number, hora:number){
        super(nome,salario)
        this.hora = hora
    }
    calcular():number{
        return this.getvalorHora() * this.hora
    }
}


class Assalariados extends Funcionario{
   private salariomensal:number
    constructor(nome:string,salariomensal:number){
        super(nome,0)
        this.salariomensal = salariomensal
    }
    getSalarioMensal():number{
        return this.salariomensal
    }
    calcularS():number{
        return this.getSalarioMensal()
    }
}


let nomeH = prompt("Digite o nome do funcionário horista:")
let valorHora = Number(prompt("Digite o valor por hora:"))
let horas = Number(prompt("Digite a quantidade de horas trabalhadas:"))


let nomeA = prompt("Digite o nome do funcionário assalariado:")
let salarioMensal = Number(prompt("Digite o salário mensal:"))

let funcionario1 = new Horistas(nomeH!, valorHora, horas)
let funcionario2 = new Assalariados(nomeA!, salarioMensal)




console.log("=== FUNCIONÁRIO HORISTA ===")
console.log("Nome:", funcionario1.nome)
console.log("Valor por hora:", funcionario1.getvalorHora())
console.log("Horas trabalhadas:", funcionario1.hora)
console.log("Salário:", funcionario1.calcular())




console.log("=== FUNCIONÁRIO ASSALARIADO ===")
console.log("Nome:", funcionario2.nome)
console.log("Salário mensal:", funcionario2.getSalarioMensal())
console.log("Salário:", funcionario2.calcularS())



}