const sqlite3 = require('sqlite3').verbose()
const path = require('path')
const caminhoArq = path.resolve(__dirname,'database.db')
const db = new sqlite3.Database(caminhoArq)



const USUARIOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "USUARIOS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(70),
    "TELEFONE" varchar(70),
    "EMAIL" varchar(70),
    "ENDERECO" varchar(100),
    "SENHA" varchar(15)
)`

const ADD_USUARIO_TESTE = `
INSERT INTO USUARIOS (ID, NOME, TELEFONE, EMAIL, ENDERECO, SENHA)
VALUES 
    (1, 'Teste Testando','0000-0000', 'teste@testando.com', 'Rua do teste,15', '12345678')    
`

function criaTabelaUsr() {
    db.run(USUARIOS_SCHEMA, (error) => {
       if (error) console.log("Erro ao criar tabela de usuários")
    })
}

function populaTabelaUser() {
    db.run(ADD_USUARIO_TESTE, (error)=> {
       if (error) console.log("Erro ao popular tabela de usuários")
    })
}

db.serialize(() => {
    criaTabelaUsr();
    populaTabelaUser();
})



