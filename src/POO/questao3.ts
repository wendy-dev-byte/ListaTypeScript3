// Classe Retângulo: Crie uma classe que modele um retângulo:
// A. Atributos: LadoA, LadoB (ou Comprimento e Largura, ou Base e Altura, a escolher)
// B. Métodos:
//  Mudar valor dos lados,
//  Retornar valor dos lados,
//  Calcular Área,
//  Calcular Perímetro.

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
const p1 = new Retangulo(5, 6)