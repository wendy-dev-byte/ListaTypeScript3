// 48. Repetição Encapsulamento Arrays
// Sistema de Monitoramento e Ajuste de Ar-Condicionado de Laboratórios
// Para garantir o clima ideal nos laboratórios de informática do campus, crie um sistema de controle
// centralizado. Crie a classe ArCondicionado com os atributos privados sala, potenciaBTUs e
// temperaturaAtual. O setter de temperaturaAtual deve validar estritamente o intervalo permitido
// de operação (somente aceitar valores entre 16°C e 30°C, emitindo um aviso de erro para tentativas
// fora desta faixa). Crie o método exibirStatus() para mostrar os dados do aparelho. O programa
// deve interagir com o usuário em um laço de repetição solicitando o cadastro de vários aparelhos até
// que o operador decida parar. Em seguida, o sistema abre um menu permitindo que o técnico informe o
// nome da sala para buscar o aparelho no array e ajustar a temperatura do ambiente. Ao final, o
// programa percorre a lista e exibe o relatório final da temperatura de todos os laboratórios.

export function questao48 (): void {

class ArCondicionado{
    private _sala: number
    public get sala(): number {
        return this._sala
    }
    public set sala(value: number) {
        this._sala = value
    }
    private _potenciBTUs: number
    public get potenciBTUs(): number {
        return this._potenciBTUs
    }
    public set potenciBTUs(value: number) {
        this._potenciBTUs = value
    }
    private _temperaturAtual: number
    public get temperaturAtual(): number {
        return this._temperaturAtual
    }
    public set temperaturAtual(temperatura: number) {
        if(temperatura >= 16 && temperatura <= 32){
            this.temperaturAtual = temperatura
        }
        else{
            alert("ERRO: Temperatura fora da faixa etária")
        }
            
    }
          exibirStatus():void{
            alert(`Número da Sala: ${this._sala}
                Potência: ${this._potenciBTUs}
                Temperatura ${this._temperaturAtual}`)

    }

    constructor(sala:number, potenciBTUs: number, temperaturAtual:number){
        this._sala = sala
        this._potenciBTUs = potenciBTUs
        this._temperaturAtual = temperaturAtual
    }
}

let listaTemp:ArCondicionado[] = []
let continua = 0
while(continua != 2){
    let nome:number = Number(prompt("Qual  numero da sala? "))
    let potencia:number = Number(prompt("Qual a potencia do ar condicionado"))
    let temperatura:number = Number(prompt("Qual valor da temperatura?"))
    let arcondicionado = new ArCondicionado(nome,potencia,temperatura)
        listaTemp.push(arcondicionado)

    continua = Number(prompt("Deseja continuar cadastrando? 1 - SIM, 2 - NÃO"))
}

let op = 0
while(op != 2){

    op = Number(prompt (`========MENU=======
        1 - Ajustar a temperatura de um laboratório.
        2 - Finalizar e exibir o relatório de todos os laboratórios.`))

        if(op == 1){
            let sala = Number(prompt("Qual número da sala que gostaria ajustar o aparelho? "))

            for(let ar of listaTemp){
                if(sala == ar.sala){
               let n = Number(prompt("Por qual temperatura deseja trocar?"))
               ar.temperaturAtual = n
                }
                
            }
        }
}
for (let ar of listaTemp) {
    ar.exibirStatus()
}
}