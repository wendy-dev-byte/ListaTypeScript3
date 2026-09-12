// 13 Uma escola quer cadastrar alunos e suas notas. O sistema deve solicitar o nome do aluno e duas notas.
// Cada aluno será um objeto. Crie um método que calcule a média e informe se o aluno foi aprovado
// (média &gt;= 7) ou reprovado (caso contrário).




class Cadastrar {
    nomeAluno:string
    nota1:number
    nota2:number
    constructor(nomeAluno:string, nota1:number,nota2:number){
        this.nomeAluno = nomeAluno
        this.nota1 = nota1
        this.nota2 = nota2
    }
    calculoMedia(nota1:number, nota2:number): string{
        this.nota1 = nota1
        this.nota2 = nota2


        let media = (this.nota1 + this.nota2)/2
   
        if(media >= 7){
            return "aprovado"
        }else{
            return "reprovado"
        }
    }
   
}
let nomeAluno = String(prompt("Qual seu nome:"))
let nota1 = Number(prompt("Qual foi sua primeira nota: "))
let nota2 = Number(prompt("Qual foi sua segunda nota: "))


let cadastrar = new Cadastrar(nomeAluno,nota1,nota2)
let result:string = cadastrar.calculoMedia(nota1,nota2)


console.log("Nome: " + nomeAluno)
console.log("Aluno: " + result)

