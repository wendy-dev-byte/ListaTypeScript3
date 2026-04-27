// 5. Analisador de Desempenho de Vendas (Relatório de Equipe)
// Imagine que você está gerindo uma equipe de 5 vendedores.
//  Função classificarVenda(valor):
// o Se valor &lt; 1000: Retorna &quot;Bronze&quot;
// o Se valor entre 1000 e 5000: Retorna &quot;Prata&quot;
// o Se valor &gt; 5000: Retorna &quot;Ouro&quot;
//  O Programa:
// 1. Use um laço for para pedir o valor da venda de cada um dos 5 vendedores.
// 2. Dentro do laço, chame a função de classificação.
// 3. Ao final, o programa deve exibir:
//  O total de vendas da equipe (soma).
//  Quem foi o vendedor com a maior venda (maior valor digitado).
//  Quantos vendedores atingiram a categoria &quot;Ouro&quot;.

let valor:number
function classificarVenda(valor: number){
    if(valor < 1000){
        return "Bronze"
    }
    else if(valor >= 1000 && valor < 5000){
        return "Prata"
    }
    else{
        return "Ouro"
    }
}

let acumulador: number = 0; let maior: number = 0; let maiorOuro = 0;let vendedorMaior:number = 0
for(let i = 0; i < 6; i++){
   valor = Number(prompt("Qual foi o valor de vendas dos 5 vendedores"+ (i + 1) + "?"))
   
 let classificacao = classificarVenda(valor)
    

    acumulador = valor + acumulador
    if(maior < valor){
        maior = valor
        vendedorMaior = i + 1
    }
    if(classificacao === "Ouro"){
        maiorOuro++
    }
}
console.log("Total de vendas da equipe: " + acumulador);
console.log("Maior venda: " + maior + " (Vendedor " + vendedorMaior + ")");
console.log("Quantidade de vendedores Ouro: " + maiorOuro);
    


 