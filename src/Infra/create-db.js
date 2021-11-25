const sqlite3 = require('sqlite3').verbose()
const path = require(path)
const caminhoArq = path.resolve(__dirname,'database.db')
const db = new sqlite3.Database(caminhoArq)



const USUARIOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "USUARIOS" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "nome" varchar(70),
    "telefone" varchar(70),
    "email" varchar(70),
    "endereco" varchar(100),
    "senha" varchar(15)
);`;

const ADD_USUARIO_TESTE = `
INSERT INTO USUARIOS (ID, NOME, TELEFONE, EMAIL, ENDERECO, SENHA)
VALUES 
    (1, 'Eugênio Oliveira','3522-0000', 'eugenio.oliveira@bol.com.br', 'Rua Belgica,15', '*******'),
    
`;

function criaTabelaUsr() {
    db.run(USUARIOS_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de usuários");
    });
}

function populaTabelaUser() {
    db.run(ADD_USUARIO_TESTE, (error)=> {
       if (error) console.log("Erro ao popular tabela de usuários");
    });
};

db.serialize(() => {
    criaTabelaUsr();
    populaTabelaUser();
});



