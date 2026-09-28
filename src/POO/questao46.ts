// 46. Repetição Encapsulamento
// Calculadora de Rendas de Aluguel Imobiliário
// Uma imobiliária quer controlar o recebimento de aluguéis. Crie a classe Imovel com os atributos
// privados codigo, valorAluguel e diasAtraso. Crie um método público
// calcularValorComMulta(): number que aplica uma multa de 2% sobre o valor do aluguel mais R$
// 5,00 por dia de atraso (caso haja atraso). O sistema deve permitir que o corretor digite os dados do
// imóvel e os dias de atraso do inquilino em um menu repetitivo. Após cada digitação, o programa
// exibe o valor atualizado da cobrança. O laço se encerra quando o usuário informar o código 0.

export function questao46():void{

class Imovel {
    private _codigo: number
    public get codigo(): number {
        return this._codigo
    }
    public set codigo(value: number) {
        this._codigo = value
    }

    private _valorAluguel: number
    public get valorAluguel(): number {
        return this._valorAluguel
    }
    public set valorAluguel(value: number) {
        this._valorAluguel = value
    }

    private _diasAtraso: number
    public get diasAtraso(): number {
        return this._diasAtraso
    }
    public set diasAtraso(value: number) {
        this._diasAtraso = value
    }

    constructor(codigo: number, valorAluguel: number, diasAtraso: number) {
        this._codigo = codigo
        this._valorAluguel = valorAluguel
        this._diasAtraso = diasAtraso
    }

    calcularValorComMulta(): number {
        if (this.diasAtraso > 0) {
            return this.valorAluguel * 1.02 + (this.diasAtraso * 5)
        } else {
            return this.valorAluguel
        }
    }
}

let codigo = Number(prompt("Digite o código do imóvel (0 para sair):"))

while (codigo != 0) {
    let valorAluguel = Number(prompt("Digite o valor do aluguel:"))
    let diasAtraso = Number(prompt("Digite os dias de atraso:"))

    let imovel = new Imovel(codigo, valorAluguel, diasAtraso)

    alert(`Código do imóvel: ${imovel.codigo}
    Valor do aluguel: R$ ${imovel.valorAluguel}
    Dias de atraso: ${imovel.diasAtraso}
    Valor atualizado: R$ ${imovel.calcularValorComMulta()}`)

    codigo = Number(prompt("Digite o código do próximo imóvel (0 para sair):"))
}
}