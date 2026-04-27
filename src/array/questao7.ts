// 7. Lista de Presença

// 1. Crie um array chamado presenca que aceite apenas strings.
// 2. Adicione 5 nomes de alunos.
// 3. Tente adicionar um número e observe o erro do compilador.
// 4. Use um loop para imprimir cada nome em letras maiúsculas.

let presenca: Array<string> = []

for(let i = 0; i < 5; i++){
    let nomes1:string = String(prompt("Quais os nomes dos alunos: "))
 // prompt pode retornar um nome ou null (se o usuário cancelar)
// este if garante que só nomes válidos sejam adicionados na lista
    if(presenca !== null){
         presenca.push(nomes1)
    }
}
// Percorre o array "presenca" do início ao fim utilizando um índice (i)
// Em cada iteração, acessa o elemento atual (presenca[i]) e converte o texto para maiúsculas
// Em seguida, exibe o valor transformado no console
for(let i = 0; i < presenca.length; i++){
    console.log(presenca[i].toUpperCase())
}
