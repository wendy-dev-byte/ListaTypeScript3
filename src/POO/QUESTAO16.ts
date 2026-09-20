

abstract class Animal {
    private nome: string
    private especie: string
    private idade: number
    private sexo: string

    constructor(nome: string, especie: string, idade: number, sexo: string) {
        this.nome = nome
        this.especie = especie
        this.idade = idade
        this.sexo = sexo
    }

    getNome(): string { return this.nome }
    getEspecie(): string { return this.especie }
    getIdade(): number { return this.idade }
    getSexo(): string { return this.sexo }

    abstract emitirSom(): void
    abstract mover(): void
}

class Mamifero extends Animal {
    private tipoAlimentacao: string

    constructor(nome: string, especie: string, idade: number, sexo: string, tipoAlimentacao: string) {
        super(nome, especie, idade, sexo)
        this.tipoAlimentacao = tipoAlimentacao
    }

    getTipoAlimentacao(): string { return this.tipoAlimentacao }

    setTipoAlimentacao(tipoAlimentacao: string): void {
        this.tipoAlimentacao = tipoAlimentacao
    }

    emitirSom(): void { console.log("Som de mamífero!") }
    mover(): void { console.log("Está andando!") }
}

class Aves extends Animal {
    private migratorio: boolean

    constructor(nome: string, especie: string, idade: number, sexo: string, migratorio: boolean) {
        super(nome, especie, idade, sexo)
        this.migratorio = migratorio
    }

    getMigratorio(): boolean { return this.migratorio }

    emitirSom(): void { console.log("Som de ave!") }
    mover(): void { console.log("Está voando!") }
}

function simularHoraAlimentacao(listaAnimais: Animal[]) {
    for (let animal of listaAnimais) {
        console.log(`Alimentando: ${animal.getNome()}`)
        animal.emitirSom()
    }
}

let listaAnimais: Animal[] = []
let opcao = ""

while (opcao != "4") {
    console.log("== ZOOLÓGICO ===")
    console.log("1 - Cadastrar animal")
    console.log("2 - Listar animais")
    console.log("3 - Hora da alimentação")
    console.log("4 - Sair")

    opcao = prompt("Escolha: ")

    if (opcao == "1") {
        let tipo = prompt("É mamífero ou ave? ")

        let nome = prompt("Nome: ")
        let especie = prompt("Espécie: ")
        let idade = Number(prompt("Idade: "))
        let sexo = prompt("Sexo: ")

        if (tipo.toLowerCase() == "mamifero" || tipo.toLowerCase() == "mamífero") {
            let alimentacao = prompt("Tipo de alimentação: ")
            let animal = new Mamifero(nome, especie, idade, sexo, alimentacao)
            listaAnimais.push(animal)
        } else {
            let migratorio = prompt("É migratória? (sim/não): ")
            let animal = new Aves(nome, especie, idade, sexo, migratorio.toLowerCase() == "sim")
            listaAnimais.push(animal)
        }

        console.log("Animal cadastrado!")
    }

    if (opcao == "2") {
        for (let animal of listaAnimais) {
            console.log(`Nome: ${animal.getNome()} | Espécie: ${animal.getEspecie()}`)
        }
    }

    if (opcao == "3") {
        simularHoraAlimentacao(listaAnimais)
    }
}

console.log("Programa encerrado!")
