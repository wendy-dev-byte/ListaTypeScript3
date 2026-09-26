// 30. O Sistema de Bilhetagem de Transporte Intermunicipal

// O sistema de transportes da região precisa de um software para gerenciar a venda de passagens. Crie
// um modelo onde cada passagem possua o nome do passageiro, CPF e o valor base da corrida. Garanta
// que esses dados não sejam alterados diretamente de fora da classe. Existem duas modalidades: a
// Passagem Comum e a Passagem Estudantil (que aplica automaticamente 50% de desconto no valor
// base). O programa deve solicitar ao usuário, em um laço de repetição, os dados de várias passagens e
// o seu tipo. No final, o sistema exibe o relatório de todas as passagens vendidas e calcula o
// faturamento total do dia utilizando uma estrutura de redução ou soma acumulada.


export function questao30():void{

class Passagem {
  private _nome: string
    public get nome(): string {
        return this._nome
    }
    public set nome(nome: string) {
        this._nome = nome
    }

  private _cpf: string
    public get cpf1(): string {
        return this._cpf
    }
    public set cpf1(cpf: string) {
        this._cpf = cpf
    }

    private _valorBase: number
    public get valorBase(): number {
        return this._valorBase
    }
    public set valorBase(valor: number) {
        this._valorBase = valor
    }

    constructor(nome: string, cpf: string, valorBase: number) {
        this._nome = nome
        this._cpf = cpf
        this._valorBase = valorBase
    }
    valorFinal(): number {
        return this._valorBase - (this._valorBase * 0.5)
    }
    exibir(valortotal:number):void {
        console.log(`Nome: ${this._nome} || CPF: ${this._cpf} || Valor Base: ${this.valorBase}`)
    }
    exibirComum():void {
        console.log(`Nome: ${this._nome} || CPF: ${this._cpf} || Valor Base: ${this.valorBase}`)
    }
}

let lista:Passagem[] = []
let op: number = 0

while (op != 4) {
        op = Number(prompt(`====MENU====
        \n 1 - Cadastarar Passagem Infantil
        \n 2 - Cadastrar Passagem Comum
        \n 3 - Faturamento
        \n 4 - Sair 
        \n Digite a opção desejada: `))
        
        if (op == 1) {
            let nome = String(prompt("Digite o nome do passageiro: "))
            let cpf = String(prompt("Digite o cpf do passageiro: "))
            let valorBase = Number(prompt("Digite o valor base do Passagem: "))
            
            let infantil = new Passagem(nome, cpf, valorBase)
            //Infantil.valorFinal()

            lista.push(infantil)


            for (let i=0; i<lista.length;i++){
                let totalTotal = lista[i].valorFinal()
                lista[i].exibir(totalTotal)
            }
        }
        
        else if (op == 2) {
            let nome = String(prompt("Digite o nome do passageiro: "))
            let cpf = String(prompt("Digite o cpf do passageiro: "))
            let valorBase = Number(prompt("Digite o valor base do Passagem: "))
            let comum = new Passagem(nome, cpf,valorBase)
            lista.push(comum)
        }


        else {
            let  total = lista.reduce((acumulador, atual) =>
            acumulador + atual.valorFinal(), 0)
            alert("Total: " + total)
        }

    }
}