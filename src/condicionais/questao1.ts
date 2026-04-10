// 1. Crie um programa que leia um número e informe se ele é:
//  Par ou Ímpar
//  Positivo ou Negativo

let numero: number = Number(prompt("Digite um número irei informar ser é par o ímpar"))
if (numero == 2 % 0 && numero > 0){
    console.log("Este número é par e positivo")
}
else if (numero == 2 % 0 && numero < 0){
    console.log("Este número é par e negativo")
}

else if (numero == 2 % 1 && numero > 0 ){
    console.log("Este número é ímpar e positivo")
}
else if (numero == 2 % 1 && numero < 0 ){
    console.log("Este número é ímpar e negativo")
}