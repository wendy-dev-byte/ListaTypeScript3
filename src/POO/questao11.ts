// 11. Uma lanchonete quer registrar pedidos dos clientes. O sistema deve solicitar o nome do cliente, o
// nome do pedido e o valor. Crie um método que exiba o resumo do pedido e o valor total.


class Pedidos{
    nome: string
    nomePedido: string
    valor: number
    constructor(nome:string,nomePedido:string, valor:number){
        this.nome = nome
        this.nomePedido = nomePedido
        this.valor = valor
    }
    exibir():void{
        console.log("NOme do cliente: " + this.nome)
        console.log("Pedido: " + this.nomePedido)
        console.log("Valor: " + this.valor)
    }
}
let listaP:Pedidos [] = []
let op = 0
while(op != -1){
    let nome:string = String(prompt("Qual o nome do cliente: "))
    let nomePedido:string = String(prompt("Quais foram os nomes dos pedidos?"))
    let valor:number = Number(prompt("Qual foi os vslores do lanche"))


let pedidos = new Pedidos(nome,nomePedido,valor)
listaP.push(pedidos)
op = Number (prompt("Deseja continnuar? "))


}




let valorT = 0


for(let pedidos of listaP){
     valorT = pedidos.valor + valorT
}
for(let pedidos of listaP){
    pedidos.exibir
}
console.log("Valor total: " + valorT)

