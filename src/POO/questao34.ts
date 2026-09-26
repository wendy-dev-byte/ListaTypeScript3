// 34. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Sistema de Gestão de Estacionamento Rotativo
// Para organizar o fluxo de veículos em um estacionamento no centro da cidade, crie um software de
// bilhetagem. A superclasse abstrata Veiculo possui placa e hora de entrada (atributos privados) e o
// método abstrato calcularValor(horasPermanencia: number): number. A classe Carro cobra R$
// 5,00 por hora. A classe Moto cobra R$ 3,00 por hora. O programa deve rodar dentro de um laço de
// repetição permitindo cadastrar os veículos que estão saindo e a quantidade de horas que
// permaneceram. Os objetos devem ser armazenados em um array de veículos. Ao encerrar o
// expediente, o sistema percorre o array, chama o método de cálculo de forma polimórfica para cada
// item e exibe o faturamento total arrecadado no dia.


export function questao34():void{

abstract class Veiculo {
    private _placa: string

    public get placa(): string {
        return this._placa
    }
    public set placa(p: string) {
        this._placa = p
    }
    private _horaEN: number

    public get horaEN(): number {
        return this._horaEN
    }
    public set horaEN(h : number) {
        this._horaEN = h
    }

    constructor(placa: string, horaEN: number){
        this._placa = placa
        this._horaEN = horaEN
    }
   abstract calcularValor(horasPermanencia: number): number
}

class Carro extends Veiculo {
    
    constructor(placa:string, horasEN: number){
        super(placa,horasEN)
    }
    calcularValor(horasPermanencia: number): number {
        return horasPermanencia * 5
    }
}

class Moto extends Veiculo {
    
    constructor(placa:string, horasEN: number){
        super(placa,horasEN)
    }
    calcularValor(horasPermanencia: number): number {
        return horasPermanencia * 3
    }

}

let listaVeiculo:Veiculo[] = []
let continuar: number = 0

while(continuar != 4) {
    continuar = Number(prompt ( ` ==========MENU======
        1 - Cadastro de Carro
        2 - Cadastro de Moto
        3 - Faturamento
        4 - Sair`))

        if (continuar == 1){
            let placa = String (prompt("Qual o número da placa? "))
            let horasINicial = Number (prompt("Por quantas horas ficou estacionado?"))

            let carro = new Carro(placa, horasINicial)
            listaVeiculo.push(carro)
        }
        else if (continuar == 2){
            let placa = String (prompt("Qual o número da placa? "))
            let horasINicial = Number (prompt("Por quantas horas ficou estacionado?"))

            let moto = new Moto(placa, horasINicial)
            listaVeiculo.push(moto)
        }
        else if (continuar == 3){
              let  total = listaVeiculo.reduce((acumulador, atual) =>
            acumulador + atual.calcularValor(atual.horaEN), 0)
            alert("Faturamento: " + total)
        }
        else if(continuar == 4){
            alert ("Programa finalizando...")
        }
        else{
            console.log("opção inválida")
        }
}
}










































// abstract class Veiculo {
//     private _placa: string

//     public get placa(): string {
//         return this._placa
//     }
//     public set placa(p: string) {
//         this._placa = p
//     }
//     private _horaEN: number

//     public get horaEN(): number {
//         return this._horaEN
//     }
//     public set horaEN(h : number) {
//         this._horaEN = h
//     }

//     constructor(placa: string, horaEN: number){
//         this._placa = placa
//         this._horaEN = horaEN
//     }
//    abstract calcularValor(horasPermanencia: number): number
// }

// class Carro extends Veiculo {
    
//     constructor(placa:string, horasEN: number){
//         super(placa,horasEN)
//     }

// }
