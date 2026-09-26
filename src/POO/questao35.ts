// 
export function questao35():void{
abstract class Cliente{
    private _nome: string

    public get nome_1(): string {
        return this._nome
    }

    public set nome_1(value: string) {
        this._nome = value
    }

    private _numeroSus: string

    public get numeroSus(): string {
        return this._numeroSus
    }

    public set numeroSus(value: string) {
        this._numeroSus = value
    }

    constructor(nome:string, numero:string) {
        this._nome = nome
        this._numeroSus = numero
    }

    abstract exibirFicha():void
}

class PacienteComum extends Cliente {
    constructor(nome:string, numeroSus: string){
        super(nome,numeroSus)
    }

    exibirFicha(): void {
        alert(`Nome: ${this.nome_1}
Cartão do Sus: ${this.numeroSus}
Paciente: Comum`)
    }
}

class PacientePrioridade extends Cliente {
    private _prioridade: string

    constructor(nome:string, numeroSus: string, prioridade: string){
        super(nome,numeroSus)
        this._prioridade = prioridade
    }

    get prioridade1():string{
        return this._prioridade
    }

    exibirFicha(): void {
        alert(`Nome: ${this.nome_1}
Cartão do Sus: ${this.numeroSus}
Prioridade - ${this.prioridade1}`)
    }
}

let listaPacientes: Cliente[] = []
let continuar = 0
let contador = 0

while(continuar != 5) {

    continuar = Number(prompt(`======MENU======
        1 - Cadastrar Pacientes Comuns
        2 - Cadastrar Pacientes com Prioridade
        3 - Exibir fichas
        5 - Sair
        `))

    if(continuar == 1){

        let nome:string = String(prompt("Qual Nome do Paciente: "))
        let numero:string = String(prompt("Qual Número do Cartão do Sus"))

        let comum = new PacienteComum(nome,numero)

        listaPacientes.push(comum)
    }

    else if(continuar == 2){

        contador++

        let nome:string = String(prompt("Qual Nome do Paciente: "))
        let numero:string = String(prompt("Qual Número do Cartão do Sus"))
        let prioridade:string = String(prompt("Qual a prioridade do Paciente: "))

        let p = new PacientePrioridade(nome,numero,prioridade)

        listaPacientes.push(p)
    }

    if(continuar == 3){

        alert(`== FICHAS CADASTRADAS ==`)

        for(let paciente of listaPacientes){
            paciente.exibirFicha()
        }

        alert(`Quantidade de pacientes prioritários: ${contador}`)
    }
}
}