// 22. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Oficina Mecânica e Revisão de Frotas
// O setor de transportes públicos precisa mapear a manutenção de seus veículos. Crie uma classe base
// para Veículo com placa e quilometragem atual. Os Ônibus precisam fazer revisão a cada 10.000 km,
// enquanto as Ambulâncias precisam de revisão preventiva a cada 5.000 km. O sistema interativo deve
// perguntar as informações da frota atual e guardar os objetos em um array. Depois, o programa solicita
// que o mecânico informe a quilometragem atual de um determinado veículo e, varrendo o array de
// objetos, o sistema responde textualmente se aquele veículo específico precisa ou não ser retido para
// manutenção imediata.

abstract class Veiculo {
    private placa: string
    private quilometragem: number

    constructor(placa: string, quilometragem: number) {
        this.placa = placa
        this.quilometragem = quilometragem
    }

    getPlaca(): string {
        return this.placa
    }

    getQuilo(): number {
        return this.quilometragem
    }

    setQuilometragem(km: number): void {
        this.quilometragem = km
    }

    abstract Revisao(): void
}

class Onibus extends Veiculo {
    constructor(placa: string, quilometragem: number) {
        super(placa, quilometragem)
    }

    Revisao(): void {
        if (this.getQuilo() % 10000 == 0) {
            console.log("Precisa de revisão!")
        }
        else {
            console.log("Não precisa de revisão")
 }
    }
}

class Ambulancias extends Veiculo {
    constructor(placa: string, quilometragem: number) {
        super(placa, quilometragem)
    }

    Revisao(): void {
        if (this.getQuilo() % 5000 == 0) {
            console.log("Precisa de revisão!")
        }
        else {
            console.log("Não precisa de revisão")        }
  }
}

let listaVeiculos: Veiculo[] = []
let op = ""

while (op != "4") {

    console.log("1 - Cadastrar ônibus")
    console.log("2 - Cadastrar ambulância")
    console.log("3 - Verificar veículo")
    console.log("4 - Sair")

    op = String ( prompt("Escolha uma opção: "))

    if (op == "1") {

        let placa = String (prompt("Digite a placa: "))
        let quilometragem = Number(prompt("Digite a quilometragem: "))

        let onibus = new Onibus(placa, quilometragem)

        listaVeiculos.push(onibus)

        console.log("Ônibus cadastrado!")

    }

    if (op == "2") {

        let placa = String (prompt("Digite a placa: "))
        let quilometragem = Number(prompt("Digite a quilometragem: "))

        let ambulancia = new Ambulancias(placa, quilometragem)

        listaVeiculos.push(ambulancia)

        console.log("Ambulância cadastrada!")

    }

    if (op == "3") {

        let placa = String (prompt("Digite a placa do veículo: "))
        let quilometragem = Number(prompt("Digite a quilometragem atual: "))

        for (let veiculo of listaVeiculos) {

            if (veiculo.getPlaca() == placa) {

                veiculo.setQuilometragem(quilometragem)

                veiculo.Revisao()
  }
    }
    }
}
