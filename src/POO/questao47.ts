// 47. Repetição Encapsulamento
// Sistema de Controle de Gastos Pessoais
// Para ajudar no planejamento financeiro, crie uma classe Despesa com os atributos privados
// descricao, categoria e valor. Crie métodos de leitura e escrita com validação para impedir valores

// menores ou iguais a zero no atributo valor. O programa deve solicitar repetidamente que o usuário
// insira suas despesas do mês. O sistema mantém uma variável acumuladora para somar o valor total
// das despesas inseridas e exibe o saldo devedor atualizado a cada nova entrada até que o usuário decida
// // parar o preenchimento.
export function questao47():void{


class Despesa {
    private _descricao: string
    public get descricao_1(): string {
        return this._descricao
    }
    public set descricao_1(value: string) {
        this._descricao = value
    }
    private _categoria: string
    public get categoria(): string {
        return this._categoria
    }
    public set categoria(value: string) {
        this._categoria = value
    }
    private _valor: number
    public get valor(): number {
        return this._valor
    }
    public set valor(value: number) {
        if(value > 0){
            this._valor = value
        }
        else{
            alert("ERRO: Valor precisa ser maior que zero")
        }
    }

    constructor(descricao: string, categoria: string, valor:number){
            this._descricao = descricao
            this._categoria = categoria
            this._valor = valor
    }
    leitura(novoValor:number): number{
            this.valor = novoValor
            return this.valor
        }
    }

let total = 0
let continua = 1
while(continua != 2){
    let descricao:string = String(prompt("Qual a descrição: (ex: caderno)"))
    let categoria:string = String(prompt("Qual categoria:"))
    let valor:number = Number(prompt("Qual foi o valor:"))

    let despesa = new Despesa(descricao,categoria,valor)

    if (despesa.valor > 0) {
    total += despesa.valor

    alert(`Despesa: ${despesa.descricao_1}
    Categoria: ${despesa.categoria}
    Valor: R$ ${despesa.valor}
    Total de gastos: R$ ${total}`)
}

continua = Number(prompt("Deseja cadastrar outra despesa? 1 - SIM, 2 - NÃO"))
}
}