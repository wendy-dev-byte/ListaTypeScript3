// 5. Classe Pessoa: Crie uma classe que modele uma pessoa:
// 1. Atributos: nome, idade, peso e altura
// 2. Métodos: Envelhecer, engordar, emagrecer, crescer.
// Obs: Por padrão, a cada ano que nossa pessoa envelhece, sendo a idade dela menor que 21 anos,
// ela deve crescer 0,5 cm.

export function questao5():void{
class Pessoa{
    nome: string
    idade: number
    peso: number
    altura: number

constructor(n: string, i: number, p: number, a:number){
    this.nome = n
    this.idade = i
    this.peso = p
    this.altura = a
}
envelhecer(): void{
    this.idade = this.idade +1
    if(this.idade < 21){
        this.altura = this.altura + 0.5
    }
}
engorda(): void{
    this.peso = this.peso + 5

}
emagrecer(): void{
    this.peso = this.peso - 5
}
mostrar(): void {
    console.log(`Nome: ${this.nome}`)
    console.log(`Idade: ${this.idade}`)
    console.log(`Peso: ${this.peso}`)
    console.log(`Altura: ${this.altura}`)
}

}

let nome:string = String(prompt("Qual seu nome?"))
let idade:number = Number(prompt("Qual sua idade?"))
let peso:number = Number(prompt("Qual seu peso? "))
let altura:number = Number(prompt("Qual sua altura?"))

const p1 = new Pessoa(nome,idade, peso, altura)
}