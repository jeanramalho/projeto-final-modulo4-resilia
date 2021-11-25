class UsuarioDAO {
    constructor(bd) {
        this.bd = bd
    }
 
    pegaTodosUsers() {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM usuarios'

            this.bd.all(sql, (error, rows) => {
                if(error) {
                    reject({
                        "mensagem" : error.message,
                        "erros" : true
                    })
                } else {
                    resolve({
                        "usuarios" : rows,
                        "count" : rows.length,
                        "error" : false
                    })
                }
            })

        })
    }

    insereUser(novoUsuario) {
        const sql = 'INSERT INTO usuarios (nome, telefone, email, endereco, senha) VALUES (?,?,?,?,?)'
                
        return new Promise((resolve, reject) => {
            this.bd.run(sql, [novoUsuario.nome, novoUsuario.tel, novoUsuario.email, novoUsuario.endereco, novoUsuario.senha], 
                (error) => {
                    if(error) {
                        reject({
                            "mensagem" : error.message,
                            "erro" : true
                        })
                    } else {
                        resolve({
                            "requisicao" : novoUsuario,
                            "erro" : false
                        })
                    }
                })
        })
    }
    
}

module.exports = UsuarioDAO