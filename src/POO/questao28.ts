// 28. Gestão de Diárias de um Hotel Fazenda
// Um hotel fazenda em Tobias Barreto quer automatizar o cálculo de suas hospedagens. Uma
// acomodação básica possui o número do quarto e o preço base da diária. A Suíte Master possui um
// valor adicional fixo referente ao uso da hidromassagem. O sistema deve interagir com o recepcionista
// perguntando os dados dos quartos e quantos dias o hóspede ficou alojado. O programa calcula o valor
// total devido de cada quarto inserido em uma lista de check-outs. Ao final, utilizando métodos de
// busca ou filtragem, o sistema deve exibir apenas os quartos que faturaram mais de R$ 1.000,00 na
// temporada.

export function questao28():void{
class Acomodacao {
    private _quarto: number
    public get quarto(): number {
        return this._quarto
    }
    public set quarto(value: number) {
        this._quarto = value        
    }

    private _precoDiaria: number
    public get precoDiaria(): number {
        return this._precoDiaria
    }
    public set precoDiaria(value: number) {
        this._precoDiaria = value
    }

    private _dias: number
    public get dias(): number {
        return this._dias
    }
    public set dias(value: number) {
        this._dias = value
    }

    constructor(quarto: number, precoDiaria: number, dias: number) {
        this._quarto = quarto
        this._precoDiaria = precoDiaria
        this._dias = dias
    }

    calcularTotal(): number {
        return this.precoDiaria * this.dias
    }

    exibirDados(): void {
        alert(`Quarto: ${this.quarto}
    Dias hospedado: ${this.dias}
    Total: R$ ${this.calcularTotal()}`)
    }
}

class SuiteMaster extends Acomodacao {
    private _adicional: number
    public get adicional(): number {
        return this._adicional
    }
    public set adicional(value: number) {
        this._adicional = value
    }

    constructor(quarto: number, precoDiaria: number, dias: number, adicional: number) {
        super(quarto, precoDiaria, dias)
        this._adicional = adicional
    }

    calcularTotal(): number {
        return (this.precoDiaria + this.adicional) * this.dias
    }
}

let lista: Acomodacao[] = []
let continuar = 1

while (continuar == 1) {
    let quarto = Number(prompt("Digite o número do quarto:"))
    let precoDiaria = Number(prompt("Digite o preço base da diária:"))
    let dias = Number(prompt("Quantos dias o hóspede ficou?"))

    let tipo = Number(prompt("Qual é o tipo de acomodação?1 - Básica\n2 - Suíte Master"))

    if (tipo == 1) {
        let acomodacao = new Acomodacao(quarto, precoDiaria, dias)
        lista.push(acomodacao)
        alert("Check-out cadastrado!")
    } else if (tipo == 2) {
        let adicional = Number(prompt("Digite o valor adicional da hidromassagem:"))
        let suite = new SuiteMaster(quarto, precoDiaria, dias, adicional)
        lista.push(suite)
        alert("Check-out cadastrado!")
    } else {
        alert("Tipo de acomodação inválido!")
    }

    continuar = Number(prompt("Deseja cadastrar outro check-out?\n1 - SIM\n2 - NÃO"))
}

let quartosFaturados = lista.filter(acomodacao => acomodacao.calcularTotal() > 1000)

alert("QUARTOS COM FATURAMENTO ACIMA DE R$ 1.000,00")

for (let acomodacao of quartosFaturados) {
    acomodacao.exibirDados()
}
}