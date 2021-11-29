class UsuarioDAO {
    constructor(bd) {
        this.bd = bd
    }
 
    async getAllUsers() {
        try {
            return new Promise((resolve, reject) => {
                const sql = 'SELECT * FROM usuarios'
    
                this.bd.all(sql, (error, rows) => {
                    if(error) {
                        reject({
                            "mensagem" : error.message,
                            "erro" : true
                        })
                    } else {
                        resolve({
                            "usuarios" : rows,
                            "count" : rows.length,
                            "erro" : false
                        })
                    }
                })
    
            })
        } catch(error){
            throw new Error(error.message)
        }
        
    }

    async getUserEmail(email) {
       try{
        const sql = `SELECT * FROM USUARIOS WHERE EMAIL = ?`

        return new Promise((resolve, reject) => {
            this.bd.all(sql, email, (error, rows) => {
                if(error) {
                    reject({
                        "mensagem" : error.message,
                        "erro" : true
                        })
                } else {
                    resolve({
                        "requisicao" : rows,
                        "erro" : false
                    })
                }
            })
        })
       } catch(error){
            throw new Error(error.message)
       }
       
    }

    async getUserId(id) {
        try{
            const sql = `SELECT * FROM USUARIOS WHERE ID = ?`

            return new Promise((resolve, reject) => {
                this.bd.all(sql, id, (error, rows) => {
                    if(error) {
                        reject({
                            "mensagem" : error.message,
                            "erro" : true
                        })
                    } else {
                        resolve({
                            "requisicao" : rows,
                            "erro" : false
                        })
                    }
                })
            })
        } catch(error) {
            throw new Error(error.message)
        }
        
    }

    async insereUser(novoUsuario) {

        try {
            const sql = 'INSERT INTO USUARIOS (nome, telefone, email, endereco, senha) VALUES (?,?,?,?,?)'
                
            return new Promise((resolve, reject) => {
                this.bd.run(sql, [novoUsuario.nome, novoUsuario.telefone, novoUsuario.email, novoUsuario.endereco, novoUsuario.senha], 
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
        } catch(error) {
            throw new Error(error.message)
        }
 
    }


    async deleteUser(id) {
        try {
            const user = await this.getUserId(id)
            if(user.requisicao.length) {
                const sql = `DELETE FROM USUARIOS WHERE ID = ?`

                return new Promise((resolve, reject) => {
                    this.bd.run(sql, id, (error) => {
                        if(error){
                            reject({
                                "mensagem" : error.message,
                                "erro" : true
                            })
                        } else {
                            resolve({
                                "mensagem" : `Usuário com ID ${id} foi deletado`,
                                "erro" : false
                            })
                        }
                    })
                })
            } else {
                throw new Error(`Usuário com ID ${id} não foi encontrado`)
            }
        } catch(error) {
            throw new Error(error.message)
        }
    }
    

    async updateUser(id, newUser){
        try {
            const sql = `UPDATE USUARIOS SET NOME = ?, TELEFONE = ?, EMAIL = ?, ENDERECO = ?, SENHA = ? WHERE ID = ?`

            return new Promise((resolve, reject) => {
                this.bd.run(sql, [newUser.nome, newUser.telefone, newUser.email, newUser.endereco, newUser.Senha, id], (error) => {
                    if(error) {
                        reject({
                            "mensagem" : error.message,
                            "erro" : true
                        })
                    } else {
                        resolve({
                            "mensagem" : `Usuário com ID ${id} foi atualizado com sucesso!`,
                            "usuario" : newUser,
                            "erro" : false
                        })
                    }
                })
            })
        } catch(error) {
            throw new Error(error.message)
        }
    }

    
}

module.exports = UsuarioDAO