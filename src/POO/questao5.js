"use strict";
// 5. Classe Pessoa: Crie uma classe que modele uma pessoa:
// 1. Atributos: nome, idade, peso e altura
// 2. Métodos: Envelhecer, engordar, emagrecer, crescer.
// Obs: Por padrão, a cada ano que nossa pessoa envelhece, sendo a idade dela menor que 21 anos,
// ela deve crescer 0,5 cm.
class Pessoa {
    nome;
    idade;
    peso;
    altura;
    constructor(n, i, p, a) {
        this.nome = n;
        this.idade = i;
        this.peso = p;
        this.altura = a;
    }
    envelhecer() {
        this.idade = this.idade + 1;
        if (this.idade < 21) {
            this.altura = this.altura + 0.5;
        }
    }
}
