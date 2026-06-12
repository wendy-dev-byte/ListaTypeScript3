// 2. Classe Quadrado: Crie uma classe que modele um quadrado:
//  Atributos: Tamanho do lado
//  Métodos: Mudar valor do Lado,
//  Retornar valor do Lado e calcular Área;

class Quadrado{
    lado:number

     constructor(l: number){
        this.lado = l
     }

mudarLado(novolado:number){
    this.lado = novolado
    return this.lado
}
calcularArea(){
   return this.lado*this.lado


}
}
const q1 = new Quadrado(5)

console.log(q1.mudarLado(10))
console.log(q1.calcularArea())