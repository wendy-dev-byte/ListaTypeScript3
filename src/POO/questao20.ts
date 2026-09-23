// 20. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Gestão de Pedidos de uma Pizzaria Local
// Para modernizar o atendimento de uma pizzaria, crie um sistema de pedidos. Um pedido base tem o
// número da mesa e o valor dos ingredientes. O Pedido de Entrega (Delivery) herda as propriedades do
// pedido base, mas precisa incluir uma taxa de entrega protegida e o endereço de destino. O software
// deve interagir com o atendente perguntando os detalhes de cada pedido feito na noite. Conforme os
// pedidos são criados, eles entram em um array de controle. Ao fechar o caixa, o sistema percorre a lista
// de pedidos, calcula os valores finais de cada um (aplicando as taxas quando necessário) e exibe o
// faturamento total do estabelecimento.

export function questao20():void{



abstract class Pizzaria {
    numeroMesa: number
    valorIngredientes: number
    constructor(numeroMesa:number, valorIngredientes:number){
        this.numeroMesa = numeroMesa
        this.valorIngredientes = valorIngredientes
    }
   abstract  calcularValorFinal(): number
}
class Delivery extends Pizzaria{
    protected taxa: number
              endereco: string

              constructor(numeroMesa:number, valorIngredientes: number,taxa = 0, endereco:string){
                super(numeroMesa,valorIngredientes)
                this.taxa = taxa
                this.endereco = endereco
              }

              calcularValorFinal():number{
                let valorFinal = this.valorIngredientes + this.taxa
                return valorFinal
              }
}
class PedidoNormal extends Pizzaria{
    constructor(numeroMesa:number,valorIngredientes:number){
        super(numeroMesa,valorIngredientes)
    }
             calcularValorFinal():number{
                return this.valorIngredientes
             }
}

let lista:Pizzaria[] = []
let op = ""

while(op != "3"){

    console.log("--- MENU ---")
    console.log("1 - Cadastrar pedido")
    console.log("2 - Fechar caixa")
    console.log("3 - Sair")

    op = String(prompt("Escolha uma opção: "))

    if(op == "1"){

        let numeroMesa = Number(prompt("Número da mesa: "))
        let valorIngredientes = Number(prompt("Valor dos ingredientes: "))

        let tipo = String(prompt("O pedido é Delivery? (S/N)")).toUpperCase()

        if(tipo == "S"){

            let taxa = Number(prompt("Qual a taxa de entrega? "))
            let endereco = String(prompt("Qual o endereço de destino? "))

            let pedido = new Delivery(numeroMesa, valorIngredientes, taxa, endereco)
            lista.push(pedido)
        }
        else{

            let pedido = new PedidoNormal(numeroMesa, valorIngredientes)
            lista.push(pedido)
        }
    }
    if(op == "2"){

        let faturamento = 0

        for(let pedido of lista){

            console.log(`Valor do pedido: R$ ${pedido.calcularValorFinal()}`)

            faturamento = faturamento + pedido.calcularValorFinal()
        }
        console.log(`Faturamento total: R$ ${faturamento}`)
    }
}
console.log("Programa encerrado")
}