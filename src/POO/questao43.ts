// 43. Repetição Encapsulamento Arrays
// Avaliação de Desempenho de Atletas
// Um clube de corrida deseja registrar a performance de seus atletas em uma maratona. Crie a classe
// Atleta com os atributos privados nome, idade e tempoMinutos. Garanta o encapsulamento de todos
// os atributos. O sistema deve permitir que o treinador cadastre via prompt os dados de vários atletas
// em um laço de repetição até digitar &quot;SAIR&quot;. O programa armazena os objetos em um array e, ao final,
// faz uma busca na lista para identificar e exibir os dados do atleta que concluiu a prova no menor
// tempo (o campeão da prova).

export function questao43():void{
class Atletas {
    private _nome: string
    public get nome(): string {
        return this._nome
    }
    public set nome(value: string) {
        this._nome = value
    }
    private _idade: number
    public get idade(): number {
        return this._idade
    }
    public set idade(value: number) {
        this._idade = value
    }
    private _tempoMinutos: number
    public get tempoMinutos(): number {
        return this._tempoMinutos
    }
    public set tempoMinutos(value: number) {
        this._tempoMinutos = value
    }
    
    constructor(nome:string, idade:number, tempoMinutos: number){
        this._nome = nome
        this._idade = idade
        this._tempoMinutos = tempoMinutos
    }
}

let lista: Atletas[] = []
let op:number = 0
while(op != 2){
    let nome:string = String(prompt("Qual nome da atleta:"))
    let idade: number = Number(prompt("Qual a idade da atleta: "))
    let tempo:number = Number(prompt("Qual foi o tempo das atletas: "))

    let atleta = new Atletas(nome,idade,tempo)
        lista.push(atleta)
    op = Number(prompt("Deseja continuar cadastrando 1 = sim, 2 - não"))
}
let t = 9999
for(let atleta of lista){
    if(atleta.tempoMinutos < t)
    t = atleta.tempoMinutos
}
for (let atleta of lista) {
    if (atleta.tempoMinutos == t) {
        console.log(`Nome: ${atleta.nome}
                     Idade: ${atleta.idade}
                     Tempo: ${atleta.tempoMinutos}`)
            
        }
    }
}