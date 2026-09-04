// 7. Uma empresa quer cadastrar funcionários e aplicar aumento salarial. O sistema deve pedir nome,
// cargo e salário. Crie um método que receba um percentual de aumento e atualize o salário do
// funcionário, exibindo o seu nome e novo valor.


class Cadastro{
    private _nome: string
   private _cargo: string
   private _salario: number
    constructor(nome: string, cargo: string, salario:number){
        this._nome = nome
        this._cargo = cargo
        this._salario = salario
    }
    get nome():string{
        return this._nome 
    }
    get cargo():string{
        return this._cargo
    }
    set salario(salario:number){
         this._salario = salario
    }

 percentual(percentualN:number){
   
    let novoSalario = this._salario + this._salario*(percentualN/100)
    return novoSalario
}
 exibirInformacao(){

console.log(`Nome do funcionário?${this.nome}`)
console.log(`Nome do Cargo?${this.cargo}`)
console.log(`Salário Final? ${this.percentual(percentualN)}`)
 }
}

let nome:string="", cargo:string="", salario:number=0

nome = String(prompt("Informe o seu nome: "))
cargo = String(prompt("Qual seu cargo?"))
salario = Number(prompt("Informe seu salário? "))
let percentualN: number = Number(prompt("Qual foi seu percentual de aumento?"))

let funcionario:Cadastro = new Cadastro(nome,cargo,salario) // objeto funcionário criado, mas os valores estão zarados


funcionario.exibirInformacao