const Usuario = require('../Models/Usuario')
const UsuarioDAO = require('../DAO/UsuarioDAO')

const usuario = (app, bd) => {
    const novoUsuarioDAO = new UsuarioDAO(bd)

    app.get('/usuarios', async (req, res) => {
        console.log('get funcionando')
        try {            
            const resposta = await novoUsuarioDAO.getAllUsers()
            res.json(resposta)
    } catch(error) {

        res.status(404).json(error)
    }
    })

    app.get('/usuario/:email', async (req, res) => {
        const email = req.params.email

        try {
            const resposta = await novoUsuarioDAO.getUserEmail(email)
            res.json(resposta)
        } catch(error) {
            res.status(404).json(error)
        }
    })

    app.get('/usuarioid/:id', async (req, res) => {
        const id = req.params.id

        try {
            const resposta = await novoUsuarioDAO.getUserId(id)
            res.json(resposta)
        } catch(error) {
            res.status(404).json(error)
        }
    })



    app.post('/usuario', (req, res) => {

       
        try {
            const body = req.body
            const novoUsuario = new Usuario(body.nome, body.telefone, body.email, body.endereco, body.senha)

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


    app.put('/usuarioup/:id', async (req, res) => {
        console.log("tentando atualizar")
        const id = req.params.id
        const body = req.body

        try {
            console.log("tentando atualizar3")
            const respostaGet = await novoUsuarioDAO.getUserId(id)
            const usuarioAntigo = respostaGet.requisicao[0]

            if(usuarioAntigo) {
                console.log("tentando atualizar4")
                const usuarioAtualizado = new Usuario(
                    body.nome || usuarioAntigo.NOME,
                    body.telefone || usuarioAntigo.TELEFONE,
                    body.email || usuarioAntigo.EMAIL,
                    body.endereco || usuarioAntigo.ENDERECO,
                    body.senha || usuarioAntigo.SENHA
                    ) 

                    const resposta = await novoUsuarioDAO.updateUser(id, usuarioAtualizado)
                    res.json(resposta)
            } else {
                res.json({
                    "mensagem" : `Usuario com ID ${id} não foi encontrado`,
                    "error" : true
                })
            }
        } catch(error) {
            res.json({
                "mensagem" : error.message,
                "error" : true
            })
        }
    })


    app.delete('/usuariodel/:id', async (req, res) => {
        const id = parseInt(req.params.id)
        try {
            const resposta = await novoUsuarioDAO.deleteUser(id)
            res.json(resposta)
        } catch(error) {
            res.status(404).json({
                "mensagem" : error.message,
                "erro" : true
            })
        }
    })
}




module.exports = usuario