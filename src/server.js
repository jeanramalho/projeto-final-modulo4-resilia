const app = require('./app')
const port = 3000

// Inicia o servidor com a porta escolhida na const port
app.listen(port, ()=> {
    console.log(`Servidor rodando: http://localhost:${port}/`)
})