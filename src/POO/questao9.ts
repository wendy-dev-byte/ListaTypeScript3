// 9. Uma loja deseja controlar seu estoque de produtos. O sistema deve pedir ao usuário o nome do
// produto, o preço e a quantidade em estoque. Cada produto deve ser representado por um objeto. Crie
// um método que calcule o valor total em estoque (preço × quantidade) e exiba essa informação para
// cada produto.

export function questao9():void{
class Controle{
    produto:string
    preco:number
    quantidade:number
    constructor(produto:string, preco:number,quantidade:number){
        this.produto = produto
        this.preco = preco
        this.quantidade = quantidade
    }
    calcularValor():Number{
        let novoPreco = this.preco * this.quantidade
        return novoPreco
    }
}
let listaC: Controle[] = []
let op = ""
while(op != "não"){
    let produto:string = String(prompt("Qual nome do produto?"))
    let preco:number = Number(prompt("Qual o preço do produto? "))
    let quantidade:number = Number(prompt("Quantos produtos foi comprado?"))


    let controle1 = new Controle(produto, preco, quantidade)
        listaC.push(controle1)
op = String(prompt("Deseja continuar?(sim/não)")).toLowerCase()
}
for(let controle1 of listaC){
    console.log("Produto: " + controle1.produto)
    console.log("Preço:" + controle1.preco)
    console.log("Quantidade: " + controle1.quantidade)
    console.log("Valor no estoque" + controle1.calcularValor())
}
}
