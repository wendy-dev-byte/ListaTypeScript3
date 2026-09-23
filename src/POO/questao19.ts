// 19. Repetição Encapsulamento Arrays
// Monitoramento de Sensores Industriais
// Uma fábrica instalou sensores para monitorar sua produção. Todo sensor possui um código
// identificador e a última leitura registrada. Um Sensor de Temperatura exibe sua leitura acompanhada
// da unidade &quot;°C&quot; e possui um alerta caso passe dos 40°C. Um Sensor de Pressão exibe sua leitura
// acompanhada de &quot;atm&quot; e alerta se passar de 5 atm. O programa deve solicitar repetidamente que o
// técnico digite os valores lidos pelos sensores espalhados pela fábrica, armazenando-os em um array.
// No final, o programa filtra a lista e exibe o relatório de todos os sensores que dispararam alertas de
// perigo

export function questao19():void{

 class Sensor{
    id: number

    constructor(id:number){
        this.id = id
    }
}

class Temperatura extends Sensor{
     medidaTemp: number

        constructor(id:number, medidaTemp: number){
            super(id)
            this.medidaTemp = medidaTemp
        }
         public alertaTemperatura(){
            if(this.medidaTemp >= 40){
                console.log("Alerta! Temperatura em " + this.medidaTemp + "C")
            }
    }
}

class Pressao extends Sensor{
    medidaAtm: number

    constructor(id:number, medidaAtm: number){
        super(id)
        this.medidaAtm = medidaAtm
    }
    public alertaPressao(){
            if (this.medidaAtm > 5){
                console.log("Alerta! Temperatura em " + this.medidaAtm + "atm")
         }
    }
}

let listaTemp: Temperatura[] = []
let listaAtm: Pressao[] = []
let temperatura: Temperatura
let t: Pressao

let op = ""
while(op != "4"){
    console.log(`n=======MENU===== 
    1 - Valor da temperatura(C)
    2 - Valor da pressão(atm)
    3 - Verificar alerta
    4 - Sair`)

    op = String(prompt("Qual das opções?"))

    if(op == "1"){
        let id = Number(prompt("Qual é o id: "))
        let tem = Number(prompt("Qual a temperatura: "))

        temperatura = new Temperatura(id,tem)
        listaTemp.push(temperatura)
    }
    else if(op == "2") {
        let id = Number(prompt("Qual é o id: "))
        let atm = Number(prompt("Qual o Atm: "))
        
        t = new Pressao(id,atm)
        listaAtm.push(t)
    }
     if(op == "3"){
        let verificar = Number (prompt("Qual Você gostaria de verificar (1 - temperatura, 2 - Atm)"))

         if(verificar == 1){
            for(let sensor of listaTemp){
                sensor.alertaTemperatura()
            }
    }

         if(verificar == 2){
            for(let sensor of listaAtm){
                sensor.alertaPressao()
            }
         }

    }
}
}