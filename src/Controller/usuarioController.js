const Usuario = require('../Models/Usuario')
const UsuarioDAO = require('../DAO/UsuarioDAO')

const usuario = (app,bd) => {
    const novoUsuarioDAO = new UsuarioDAO(bd)

    app.get('/usuarios', (req, res) => {
        console.log('get funcionando')

        novoUsuarioDAO.pegaTodosUsers()
        .then((resposta) => {
            res.json(resposta)
        })
        .catch((erro) => {
            res.json(erro)
        })
    })

    app.post('/usuario', (req, res) => {

       
        try {
            const body = req.body
            const novoUsuario = new Usuario(body.nome, body.tel, body.email, body.endereco, body.senha)

            novoUsuarioDAO.insereUser(novoUsuario)
            .then((resposta) => {
                res.json(resposta)
            })
            .catch((erro) => {
                res.json(erro)
            })

        } catch (error) {
            res.json({
                "mensagem" : error.message,
                "erro" : true
            })
        }
    })
}

module.exports = usuario