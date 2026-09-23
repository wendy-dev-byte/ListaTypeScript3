// questao 10

export function questao10():void{
class BichinhoVirtual{
    nome:string
    fome:string
    saude:string
    idade:number
    constructor(nome:string,fome:string,saude:string,idade:number){
        this.nome = nome
        this.fome = fome
        this.saude = saude
        this.idade = idade
    }
    alterarNome(novoNome:string){
        this.nome = novoNome
        return this.nome
    }

    alterarFome(novaFome:string){
        this.fome = novaFome
        return this.fome
    }
    alterarSaude(novaSaude:string){
        this.saude = novaSaude
        return this.saude
    }
    alterarIdade(novaIdade:number){
        this.idade = novaIdade
        return this.idade
    }

    humor():string{
        if(this.fome == "S" && this.saude == "S"){
            return "Maravilhoso"
        }
        else if (this.fome != this.saude){
            return "50%"
        }
        else{
            return "Péssimo"
        }
    }
    exibir():void{
        console.log(`nome ${this.nome} | fome ${this.fome} | saude ${this.saude} | idade ${this.idade} | humor ${this.humor()}`)
    }
}
console.log("BEM-VINDO AO BIXINHO VIRTUAL")

let nome:string = String(prompt("Qual nome do bixinho?"))
let fome:string = String(prompt("O bixinho está com fome?(S - sim, N - não)"))
let saude:string = String(prompt("O bixinho está com saúde?(S - sim, N - não)"))
let idade:number = Number(prompt("Qual idade do bixinho?"))

let bichinhoVirtual = new BichinhoVirtual(nome,fome,saude,idade)

let op = String(prompt("Deseja alterar alguma coisa no bixinho? (S - sim, N - não)")).toUpperCase()


while(op != "N"){


    let bixinho = Number(prompt("1 - Alterar nome / 2 - Alterar fome / 3 - Alterar saude / 4 - Alterar idade"))


    if(bixinho == 1){
        let novoNome = String(prompt("Qual será o novo nome?"))
        bichinhoVirtual.alterarNome(novoNome)
    }


    if(bixinho == 2){
        let novaFome = String(prompt("O bixinho está com fome?(S - sim, N - não)"))
        bichinhoVirtual.alterarFome(novaFome)
    }


    if(bixinho == 3){
        let novaSaude = String(prompt("O bixinho está com saúde?(S - sim, N - não)"))
        bichinhoVirtual.alterarSaude(novaSaude)
    }


    if(bixinho == 4){
        let novaIdade = Number(prompt("Qual será a nova idade?"))
        bichinhoVirtual.alterarIdade(novaIdade)
    }


    bichinhoVirtual.exibir()


    op = String(prompt("Deseja alterar alguma outra coisa? (S - sim, N - não)")).toUpperCase()
}


console.log("DADOS FINAIS DO BIXINHO")
bichinhoVirtual.exibir()

}
