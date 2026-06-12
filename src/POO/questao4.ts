// 4.Crie um programa que utilize a classe acima. Ele deve pedir ao usuário que informe as medidas de um
// local. Depois, deve criar um objeto com as medidas e calcular a quantidade de pisos e de rodapés
// necessárias para o local.





class Retangulo{
    altura: number
    base: number

constructor(a: number, b:number){
    this.altura = a
    this.base = b
}

mudarValor(novoValorA: number, novoValorB:number) : void{
    this.altura = novoValorA
    this.base = novoValorB  
}
retornaValor(){
    console.log("Altura: " + this.altura)
    console.log("Base: " + this.base)
}
calcularArea(){
    return this.altura * this.base
}
calcularPerimetro(){
    return  2*(this.altura + this.base)
}

}

let altura:number = Number(prompt("Qual a altura? "))
let base:number = Number(prompt("Qual valor da base?"))

const q1 = new Retangulo(altura, base)

console.log("Area" + q1.calcularArea())
console.log(`Perimetro ${q1.calcularPerimetro()}`)