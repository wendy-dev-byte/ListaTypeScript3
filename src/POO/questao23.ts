// 23. Cadastro de Produtos de um Supermercado com Desconto Progressivo
// Um mercado de atacado precisa atualizar os preços de suas mercadorias nas prateleiras. Todo produto
// possui código, nome e preço de custo ocultados do acesso externo direto. Os Produtos Perecíveis
// possuem uma data de validade e recebem um desconto de 30% caso estejam no dia do vencimento. Os
// Produtos Não Perecíveis não sofrem alteração de valor. O sistema deve interagir com o gerente para
// listar os produtos do estoque. Após preencher o estoque (array), o programa deve rodar um loop que
// simula a passagem do caixa, aplicando as regras de desconto conforme o tipo do produto e exibindo o
// valor final que o cliente pagará.

 class Produto {
    codigo: string
    nome: string
   private _preco: number

    constructor(codigo: string, nome: string, preco: number){
        this.codigo = codigo
        this.nome = nome
        this._preco = preco
    }
    get preco():number{
        return this._preco
    }

    set preco(preco:number){
        this._preco = preco
    }
    calcularvalorFinal(dataVencimento:string,dataProduto:string):number{
        let valorComDesconto = this.preco
        if(dataVencimento === dataProduto){
            valorComDesconto = valorComDesconto - (this.preco * (30 / 100))
        }
        return valorComDesconto
    }
}

let listaProduto:Produto[]=[]
let pec = Number(prompt("Produto é perecível 1-sim 2-não 3 - sair"))

while(pec != 3){

    let codigo = String(prompt("Código:"))
    let nome = String(prompt("Nome:"))
    let preco = Number(prompt("Preço:"))
    let produto = new Produto(codigo, nome, preco)
    listaProduto.push(produto)
    
         pec = Number(prompt("Produto é perecível 1-sim 2-não 3 - sair"))


    if(pec == 1){
        let dataVenc:string = String (prompt("Informe a data do vencimento: Ex. 10/10/2026"))
        let dataProd:string = String (prompt("Informe a data do Produto: "))
        
         let precoFinal = produto.calcularvalorFinal(dataVenc, dataProd)
             console.log("Preço final:", precoFinal)
        }

        console.log("===== ESTOQUE =====")

for (let produto of listaProduto) {
    console.log("Código:", produto.codigo)
    console.log("Nome:", produto.nome)
    console.log("Preço:", produto.preco)
}
       }

