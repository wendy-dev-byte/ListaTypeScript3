// 42. Repetição Encapsulamento Arrays
// Controle de Estoque de Farmácia
// Uma farmácia precisa monitorar a quantidade de remédios em seu estoque. Crie a classe
// Medicamento com os atributos privados nome, lote, preco e quantidadeEstoque. Crie getters e
// setters com validação no setter de quantidadeEstoque para não permitir valores negativos. O
// programa deve solicitar via teclado o cadastro de até 10 medicamentos e armazená-los em um array.
// Em seguida, utilize um laço para percorrer o array e exibir apenas os medicamentos que estão com
// estoque crítico (quantidade menor que 5 unidades), mostrando o nome e a quantidade restante de cada
// // um.

export function questao42 (): void {
class Monitora {
    private _nome: string
    private _lote: string
    private _preco: number
    private _quantidadeEstoque: number

        constructor(nome:string, lote:string, preco:number, quantidadeEstoque: number){
            this._nome = nome
            this._lote = lote
            this._preco = preco
            this._quantidadeEstoque = quantidadeEstoque
        }
        get nome():string{
            return this._nome
        }
        get lote():string{
            return this._lote
        }
        get preco():number{
            return this._preco
        }
        set preco(novoPreco:number){
             this._preco = novoPreco
        }
        get quantidadeEstoque(): number{
            return this._quantidadeEstoque
        }
        set quantidadeEstoque(quantidade: number){
            if (quantidade >= 0){
                this.quantidadeEstoque = quantidade
            }
             
        }
} 

let lista:Monitora[] = []

for (let i = 0; i < 10; i++) {
    let nome: string = String(prompt("Qual nome do medicamento? "))
    let lote: string = String(prompt("Qual lote? "))
    let preco: number = Number(prompt("Qual é o preço do medicamento? "))
    let quantidade: number = Number(prompt("Qual quantidade que tem no estoque? "))
    let monitora = new Monitora(nome, lote, preco, quantidade)
    lista.push(monitora)
}
for (let monitora of lista){
    if(monitora.quantidadeEstoque < 5){
        console.log(`Nome: ${monitora.nome}
           Quantidade menor: ${monitora.quantidadeEstoque} `)
    }
}
}