// 44. Repetição Encapsulamento Arrays
// Gestão de Manutenção de Computadores
// O setor de suporte técnico do campus precisa de um controle de chamados. Crie a classe Chamado
// com os atributos privados id, descricaoEquipamento, laboratorio e concluido (boolean). Crie
// um método finalizarChamado() que altera o status de concluido para true. O programa deve
// pedir ao técnico para cadastrar os chamados do dia em um array. Após o cadastro, o programa entra
// em um novo laço permitindo que o técnico informe o id dos chamados que ele conseguiu resolver no
// turno para marcá-los como concluídos. Ao final, o sistema exibe o relatório de quantos chamados
// foram atendidos e quantos continuam pendentes.

export function questao44 (): void {

class Manutencao {
    private _id: string
    public get id(): string {
        return this._id
    }
    public set id(value: string) {
        this._id = value
    }
    private _descricao: string
    public get descricao(): string {
        return this._descricao
    }
    public set descricao(value: string) {
        this._descricao = value
    }
    private _labori: string
    public get labori(): string {
        return this._labori
    }
    public set labori(value: string) {
        this._labori = value
    }
    private _concluido: boolean
    public get concluido(): boolean {
        return this._concluido
    }
    public set concluido(value: boolean) {
        this._concluido = value
    }

    constructor(id: string, descricao: string, labori:string){
        this._id = id
        this._descricao = descricao
        this._labori = labori
        this._concluido = false
    }
    finalizarChamado(): void {
    this._concluido = true
}
}

let listaCa:Manutencao[] = []


let opcao = 1
let atendidos = 0
let pendentes = 0
while (opcao != 2) {
    let id = String(prompt("ID do chamado: "))
    let descricao = String(prompt("Descrição do equipamento: "))
    let labori = String(prompt("Laboratório: "))

    let chamado = new Manutencao(id, descricao, labori)
    listaCa.push(chamado)

    opcao = Number(prompt("1 - Cadastrar outro  2 - Parar"))
}
let c = 1

while(c != 2){

    let idP: string = String(prompt("Qual ID da máquina foi resolvida? "))
     for(let chamado of listaCa){
        if(idP == chamado.id){
            chamado.finalizarChamado()
        }
    }
    c = Number(prompt("1 - Informar outro ID 2 - Parar"))
}
for(let chamado of listaCa){
    if (chamado.concluido == true){
        atendidos = atendidos + 1
    }
    else{
        pendentes = pendentes + 1
    }
}
console.log("Chamados atendidos:", + atendidos)
console.log("Chamados pendentes:",+ pendentes)
}