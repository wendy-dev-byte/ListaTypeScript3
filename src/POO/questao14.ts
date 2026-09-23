// / Arrays Repetição Encapsulamento
// // 14. Uma biblioteca precisa catalogar seus livros. Crie uma classe Livro com título, autor, ano de
// // publicação e disponibilidade (boolean). O programa deve permitir cadastrar até 15 livros via teclado,
// listar todos os disponíveis e registrar o empréstimo de um livro pesquisado pelo título.

export function questao14():void{

class Biblioteca{
    tit:string
    autor:string
    ano:number
    disponibilidade:boolean
    constructor(tit:string, autor:string, ano:number, disponabilidade:boolean){
        this.tit = tit
        this.autor = autor
        this.ano = ano
        this.disponibilidade = disponabilidade
    }
    public exebirLivro():void{
        console.log("Título: " + this.tit)
        console.log("Autor: " + this.autor)
        console.log("Ano: " + this.ano)
        console.log("disponabilidade: " + this.disponibilidade)
    }
}

let lista:Biblioteca[] = []
let local:Biblioteca
let quantidade = ""
let dist:boolean
while(quantidade != "N"){
    
    let titulo = String(prompt("Qual nome do título do livro:"))
    let autor = String(prompt("Qual nome do autor: "))
    let ano = Number(prompt("qual foi o ano da publicação: "))
    let disposicao = String(prompt("O livro está disponível: S - sim, N - Não")).toUpperCase()

    if(disposicao == "S"){
        dist = true
    }else{
        dist=false
    }

     local = new Biblioteca(titulo,autor,ano,dist)
     lista.push(local)
     quantidade = String(prompt("Deseja continuar?(S - sim, N - não)")).toUpperCase()
}
for(let i=0; lista.length; i++){
    console.log(lista[i])
}

}