 
// Controle de Frequência do Refeitório do IFS
// O Refeitório do IFS deseja controlar o acesso de seus usuários. Todo usuário possui um identificador
// numérico interno e o nome completo. Os usuários dividem-se em Alunos (que possuem o curso) e
// Servidores (que possuem o departamento). O sistema deve pedir para o operador cadastrar os usuários
// que estão na fila. Cada vez que um usuário passa pela catraca, um método deve registrar essa presença
// em um histórico (array). Ao digitar um comando de encerramento, o programa exibe a listagem de
// quem almoçou no dia, mostrando mensagens personalizadas para cada tipo de usuário através de um
// método comum de identificação, além de exibir a quantidade total de acessos de alunos.








abstract class Refeitorio{
   private  id:number
   private nome:string
    constructor(id:number,nome:string){
        this.id = id
        this.nome = nome
    }
    getId():number{
        return this.id
    }
    getNome():string{
        return this.nome
    }
    abstract identificar():void
}
class Alunos extends Refeitorio{
    curso1:string
    constructor(id:number,nome:string,curso1:string){
        super(id,nome)
        this.curso1 = curso1
    }
    identificar(){
        console.log(`Id ${this.getId()}|
        nome: ${this.getNome()}
        Curso: ${this.curso1} `)
    }




}class Servidores extends Refeitorio{
    departamento1:string
    constructor(id:number,nome:string, departamento1:string){
        super(id,nome)
        this.departamento1 = departamento1
    }
    public identificar():void{
         console.log(`Id ${this.getId()}
         nome: ${this.getNome()}
         Departamento: ${this.departamento1} `)




    }
}








let listaServidor:Servidores[] = []
let listaAluno:Alunos[] = []




let id=0,nome="",curs="",depar=""
let alunos:Alunos = new Alunos(id,nome,curs)
let servidor = new Servidores (id,nome,depar)




let usuario
let op = ""
while(op != "N"){
     id = Number(prompt("qual id? "))
     nome = String(prompt("Qual seu nome: "))
    usuario = String(prompt("S - Servidor, A - alunos")).toUpperCase()
    if(usuario == "S"){
        let depar = String(prompt("Qual seu departamento?"))
        servidor = new Servidores (id,nome,depar)
        listaServidor.push(servidor)
    }
    if(usuario == "A"){
        curs = String(prompt("Qual seu curso?"))
        alunos = new Alunos (id,nome,curs)
        listaAluno.push(alunos)
    }
    op = String(prompt("deseja continuar?(N - não, S- sim)")).toUpperCase()
}
    console.log("Lista de Aluno: ")
for(let i=0; i<listaAluno.length; i++){
    listaAluno[i].identificar()
   
}
console.log("Lista de servidores: ")
for(let i = 0; i<listaServidor.length; i++){
   
    listaServidor[i].identificar()
}
let totalA = listaAluno.length
let totalS = listaServidor.length
console.log(" A quantidade de Alunos " +totalA )
console.log(" A quantidade de sERVIDORES " + totalS)























