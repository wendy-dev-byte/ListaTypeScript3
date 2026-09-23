// //QUESTÃO 21
// // 21.	O projeto socioambiental "Flor&Ser" abriu inscrições para propostas de reflorestamento no 
// // campus do IFS Tobias Barreto. Crie a superclasse Projeto com os atributos privados titulo, 
// // coordenador e nota. O setter setNota(valor) deve validar estritamente o intervalo de 0 a 10, 
// // lançando exceção ou mensagem de erro para valores inválidos. As subclasses ProjetoVerde (plantio urbano)
// //  e ProjetoCultural (conscientização) sobrescrevem o método descricaoCategoria() com textos distintos. 
// // O usuário preenche os projetos pelo terminal. 
// // O programa calcula a média das notas e, ao final, 
// // exibe os projetos com nota acima da média, mostrando a categoria de cada um via polimorfismo.
// // Requisitos mínimos:
// // • nota privada com validação estrita no setter (0 ≤ nota ≤ 10).
// // • descricaoCategoria() abstrato/sobrescrito em ProjetoVerde e ProjetoCultural.
// // • Cálculo de média com laço sobre os projetos cadastrados.
// // • Filtro e exibição dos projetos acima da média.
// // • Chamada polimórfica a descricaoCategoria() na exibição final.

export function questao21():void{

abstract class Projeto {
    private _titulo:string = ""
    private _coordenador:string = ""
    private _nota:number

    constructor(nota:number){
        this._nota = nota
    }
    //get e set
    get nota():number{
        return this._nota
    }
    set nota(valor:number){
        if(valor>=0 && valor<= 10){
            this._nota = valor
        }else{
            console.log("Valor inválido!!")
        }
    }
   abstract descricaoCategoria():void
   abstract calculodeMedia():void
}

class ProjetoVerde extends Projeto{
   
    public descricaoCategoria(): void {
        console.log("Bem vindo ao projeto Verde, Filho do Projeto Original")  
    }
    public calculodeMedia() {
        let contador=0,media=0,acum = 0, nota = 0

        nota = Number(prompt("Informe a nota do Projeto Verde ou -1 para sair: "))
        while(nota !=-1 ){
            contador ++
            acum = acum + this.nota
            media = acum/contador
            nota = Number(prompt("Informe a nota do Projeto Verde ou -1 para sair: "))
            alert("Entrei")
        }
        console.log("O valor da média foi: "+media)
    }
}
class ProjetoCultural extends Projeto{
    constructor(nota:number){
        super(nota)
    }
    public descricaoCategoria(): void {
      console.log("Bem vindo ao projeto Cultural, Filho do Projeto Original")  
    }

    public calculodeMedia(): void {
        let contador=0,media=0,acum = 0, nota=0

        nota = Number(prompt("Informe a nota do Projeto Cultural ou -1 para sair: "))
        while(nota !=-1 ){
            contador ++
            acum = acum + nota
            media = acum/contador
            nota = Number(prompt("Informe a nota do Projeto Cultural ou -1 para sair: "))
        }
        console.log("O valor da média foi: "+media)
    }
}

let op = -1

while(op!= 0 ){
op = Number(prompt(`Escolha as opções desejadas: 
    1-Inserir nota do projeto Verde: 
    2-Inserir a nota do Projeto Cultural:
    0-Para sair`))

    if (op == 1){
        let projetoVerde:ProjetoVerde = new ProjetoVerde(0)
        projetoVerde.calculodeMedia()

    }else if(op == 2){
        let projetoCultural:ProjetoCultural = new ProjetoCultural(0)
        projetoCultural.calculodeMedia()
    }
}
}