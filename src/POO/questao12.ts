
// 12 Uma locadora quer controlar os carros disponíveis. O sistema deve solicitar o modelo do carro, o
// valor da diária e a quantidade de dias que o cliente deseja alugar. Crie um método que calcule o valor
// total do aluguel e exiba o resumo da locação. Por fim, o sistema deve perguntar se deseja fazer uma
// nova locação.

export function questao12():void{
class Controle {
    modeloCarro: string
    valorDiaria: number
    quantidadeDias: number

    constructor(modeloCarro: string, valorDiaria: number, quantidadeDias: number) {
        this.modeloCarro = modeloCarro
        this.valorDiaria = valorDiaria
        this.quantidadeDias = quantidadeDias
    }

    calcularValor(): number {
        let total = this.valorDiaria * this.quantidadeDias
        return total
    }

    exibirResumo(): void {
        console.log("Modelo do carro: " + this.modeloCarro)
        console.log("Valor da diária: R$ " + this.valorDiaria)
        console.log("Quantidade de dias: " + this.quantidadeDias)
        console.log("Valor total: R$ " + this.calcularValor())
    }
}

let op: string = ""

while (op != "NÃO") {
    let modeloDoCarro: string = String(prompt("Qual modelo do carro? "))
    let valorDiaria: number = Number(prompt("Qual foi o valor da diária? "))
    let quantidadeDeDias: number = Number(prompt("Quantos dias ficou alugado? "))

    let controle = new Controle(modeloDoCarro, valorDiaria, quantidadeDeDias)

    controle.exibirResumo()

    op = String(prompt("Deseja fazer uma nova locação? Sim/Não")).toUpperCase()
}
}
