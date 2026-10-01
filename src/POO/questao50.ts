// 50. Repetição Encapsulamento Arrays
// Controle de Ponto e Escala de Funcionários da Reitoria
// O setor de gestão de pessoas precisa de um software para registrar as batidas de ponto dos servidores.
// Crie a classe RegistroPonto com os atributos privados matricula, nomeServidor, horaEntrada e
// horaSaida (armazenados como números inteiros de 0 a 23). Crie métodos setters com validação para
// garantir que as horas informadas estejam entre 0 e 23, e que a horaSaida seja obrigatoriamente maior
// que a horaEntrada. Crie também o método calcularHorasTrabalhadas(): number. O programa
// deve rodar dentro de uma estrutura de repetição solicitando que o operador cadastre o ponto de vários
// servidores em um array. Ao encerrar as entradas, o programa varre a lista, invoca o método de cálculo
// de horas trabalhadas de cada objeto e exibe o relatório final com o nome de cada servidor, o total de
// horas cumpridas no dia e o somatório geral de horas trabalhadas por toda a equipe da reitoria.

class RegistroPonto {
    private _matricula: number
    public get matricula(): number {
        return this._matricula
    }
    public set matricula(value: number) {
        this._matricula = value
    }
    private _nomeServidor: string
    public get nomeServidor(): string {
        return this._nomeServidor
    }
    public set nomeServidor(value: string) {
        this._nomeServidor = value
    }
    private _horaEntrada: number
    public get horaEntrada(): number {
        return this._horaEntrada
    }
    public set horaEntrada(value: number) {
        if(value % 1 == 0 && value < 23)
        this._horaEntrada = value
    }
    private _horaSaida: number
    public get horaSaida(): number {
        return this._horaSaida
    }
    public set horaSaida(value: number) {
         if(this.horaSaida > this._horaEntrada)
             if(value % 1 == 0 && value < 23)
            
        
    }

        constructor(matricula:number, nomeServidor: string, horaEntrada:number, horaSaida:number){
            this._matricula = matricula
            this._nomeServidor = nomeServidor
            this._horaEntrada = horaEntrada
            this._horaSaida = horaSaida
        }
}