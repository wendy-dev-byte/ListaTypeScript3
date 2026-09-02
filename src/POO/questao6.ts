// 6. Classe Conta Corrente: Crie uma classe para implementar uma conta corrente. A classe deve possuir
// os seguintes atributos: número da conta, nome do correntista e saldo. Os métodos são os seguintes:
// alterarNome, depósito e saque. No construtor, saldo é opcional, com valor default zero e os demais
// atributos são obrigatórios. Por fim, faça com que esse sistema interaja com o usuário permitido que
// ele, depois de cadastrar as suas informações, possa usar os métodos disponíveis.


class contaCorrenta {
    public numeroConta: number
    public nomeCorrentista: string
    public saldo: number = 0

    constructor(numeroConta: number, nomeCorrentista: string){
        this.numeroConta = numeroConta
        this.nomeCorrentista = nomeCorrentista
    }

    public alterarnome(): void{
    this.nomeCorrentista = nomeNovo
}

    public deposito(valor:number): Number{
        this.saldo = this.saldo + valor

        return this.saldo
    }

    public saque(valor:number): Number{
        if(valor > this.saldo){
            console.log("O valor do saldo é maior do que o saldo disponível")
        }
        else{
            this.saldo = this.saldo + valor
            console.log
        }

    }
}