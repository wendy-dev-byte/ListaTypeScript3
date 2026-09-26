// 36. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Portal de Cursos e Treinamentos Online

// Uma plataforma de ensino quer gerenciar a emissão de certificados de seus estudantes. A classe base
// Curso possui título e carga horária privados. A classe CursoLivre emite certificado automaticamente
// ao concluir as horas. A classe CursoTecnico possui um atributo adicional para o número do projeto
// final e só permite emitir o certificado se o projeto tiver nota aprovada (maior ou igual a 7). O
// programa deve solicitar repetidamente os dados dos cursos concluídos por um aluno e guardá-los em
// um array. No final, o sistema percorre a lista e dispara o método emitirCertificado() de cada
// curso, exibindo quais certificados foram liberados e quais ficaram pendentes.

export function questao36():void{
    
abstract class Certificados {
    private _titulo: string
    public get titulo(): string {
        return this._titulo
    }
    public set titulo(tit: string) {
        this._titulo = tit
    }

    private _cargaH: number
    public get cargaH(): number {
        return this._cargaH
    }
    public set cargaH(c: number) {
        this._cargaH = c
    }

    constructor(titulo: string, cargaH: number) {
        this._titulo = titulo
        this._cargaH = cargaH
    }

    abstract emitirCertificado(): string
    abstract exibir(): void
}

class CursoLivre extends Certificados {
    CargaHCon: number

    constructor(titulo: string, cargaH: number, cargaHC: number) {
        super(titulo, cargaH)
        this.CargaHCon = cargaHC
    }

    emitirCertificado(): string {
        if (this.cargaH === this.CargaHCon) {
            return "Certificado Concluído"
        } else {
            return "Certificado não concluído"
        }
    }

    exibir(): void {
        let emitir = this.emitirCertificado()

        console.log(`Titulo: ${this.titulo} || Carga Horária Obrigatória: ${this.cargaH} || Carga Horária cumprida: ${this.CargaHCon} || ${emitir}`)
    }
}

class CursoTecnico extends Certificados {
    nota: number

    constructor(titulo: string, cargaH: number, nota: number) {
        super(titulo, cargaH)
        this.nota = nota
    }

    emitirCertificado(): string {
        if (this.nota >= 7) {
            return "Certificado concluído"
        } else {
            return "Certificado não concluído"
        }
    }

    exibir(): void {
        let emitir = this.emitirCertificado()

        console.log(`Titulo: ${this.titulo} || Carga Horária: ${this.cargaH} || Nota do projeto: ${this.nota} || ${emitir}`)
    }
}

let lista: Certificados[] = []

let op = "s"

while (op == "s") {

    let tipo = String(prompt("Qual tipo de curso? 1- Livre 2- Técnico"))

    let tit: string = String(prompt("Qual nome do título? "))
    let carga: number = Number(prompt("Qual era a carga horária do curso? "))

    if (tipo === "1") {

        let cargaFinal: number = Number(prompt("Qual foi a carga horária cumprida? "))

        let cursoLivre = new CursoLivre(tit, carga, cargaFinal)

        lista.push(cursoLivre)

    } else if (tipo === "2") {

        let nota: number = Number(prompt("Qual foi a nota do projeto final? "))

        let cursoTecnico = new CursoTecnico(tit, carga, nota)

        lista.push(cursoTecnico)

    } else {
        console.log("Tipo de curso inválido")
    }

    op = String(prompt("Deseja cadastrar outro curso? s/n"))
}

console.log("----- CERTIFICADOS -----")

for (let curso of lista) {
    curso.exibir()
}
}
