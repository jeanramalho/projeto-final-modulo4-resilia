var id = 0

class Usuario {
    constructor(nome, telefone, email, endereco, senha, array, idExistente) {
        if(array){
            if(idExistente) {
                this.id = idExistente
            } else {
                this.id = id++
            }
        }

        this.nome = nome
        this.telefone = telefone
        this.email = email
        this.endereco = endereco
        this.senha = senha
    }

    // _verificaSenha(senha) {
    //     if(senha.length <= 8) {
    //         return senha
    //     } else {
    //         throw new Error("A Senhe precisa ter no mínimo 8 caracteres")
    //     }
    // }

    // _verificaEmail(email) {
    //     var emailVerificador = email.includes('@')

    //     if(emailVerificador === true) {
    //         return email
    //     } else {
    //         throw new Error("O email inserido precisa ser válido")
    //     }
    // }
}

module.exports = Usuario