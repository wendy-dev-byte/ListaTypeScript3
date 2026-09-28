// 45. Repetição Encapsulamento
// Validador de Senhas e Segurança de Acesso
// Crie uma classe UsuarioSistema com os atributos privados login e senha. O setter da senha deve
// aplicar uma regra de segurança estrita: a senha precisa ter pelo menos 6 caracteres e não pode ser
// igual ao login. Caso a regra seja descumprida, o método deve exibir uma mensagem de erro e não
// alterar o atributo. O programa deve rodar em um laço de repetição solicitando que o usuário cadastre
// suas credenciais até que ele forneça uma senha válida que atenda a todos os requisitos de segurança
// do sistema.
export function questao45                                               

():void{
class UsuarioSistema {

    private login: string
    private senha: string = ""

    constructor(login: string) {
        this.login = login
    }

    setSenha(novaSenha: string) {
        if (novaSenha.length < 6) {
            console.log("Erro: a senha deve ter pelo menos 6 caracteres.")
        } else if (novaSenha === this.login) {
            console.log("Erro: a senha não pode ser igual ao login.")
        } else {
            this.senha = novaSenha
            console.log("Senha cadastrada com sucesso!")
        }
    }

    getSenha() {
        return this.senha
    }
}

let login:string = String(prompt("Digite seu login: "))
let usuario = new UsuarioSistema(login)

let senha = ""

while (usuario.getSenha() === "") {
    senha = String(prompt("Digite sua senha: "))
    usuario.setSenha(senha)
}

console.log("Cadastro concluído!")
}