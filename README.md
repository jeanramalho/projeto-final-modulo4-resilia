# Projeto Final do Módulo 4 - Resilia - Curso WebDev


## Descrição
Neste módulo o desafio do projeto final proposto ao grupo é criar uma API Rest completa sobre o tema determinado, cada participante fica responsável por uma determinada entidade. Em grupos utilizamos as habilidades de SoftSkills, realizamos sprints para decidir cada parte do projeto e padronização do mesmo, assim como as entidades que cada participante do grupo ficaria responsável. Neste caso, fiquei responsável pela entidade USUÁRIO.

## Sobre o Projeto
O intúito do projeto é criar uma API Rest completa e utilizar o CRUD através de verbos HTTP. O projeto será desenvolvido em [NodeJS](https://nodejs.org/en/about/) e libs como [Express](https://expressjs.com/) e [Jest](https://jestjs.io/pt-BR/) para testes unitários. Também utilizaremos o [SQLite3](https://www.npmjs.com/package/sqlite3) como banco de dados da aplicação.


## Inicialização da API
Realize o clone do repositório na sua máquina executando a seguinte linha de código em um terminal:

``` s
git clone https://github.com/jeanramalho/projeto-final-modulo4-resilia.git
```


Após ter o repositório em sua máquina para inicializar a API é necessário que sejam instaladas as dependencias e inicializados o banco de dados e o servidor.

A partir de um terminal siga as instruções abaixo:

Acesse a pasta raiz do projeto:
``` s
cd projeto-final-modulo4-resilia
```

Instale as depêndencias:
``` s
npm install
``` 
Em seguida inicialize o banco de dados:
``` s
npm run database
``` 
Por fim, para inicializar o servidor utilize:
``` s
npm start
```
A API funcionará em ``` http://localhost:3003/ ```
Utilize uma plataforma como Insomnia ou Postman para realizar as operações CRUD com verbos HTTP localmente.

## Rotas

#### Retorna todos os usuários
* GET     /usuarios
#### Retorna usuário com email informado
* GET     /usuario/{email}
#### Retorna usuário com id informado
* GET     /usuarioid/{id}
#### Insere registro de usuário no banco de dados
* POST    /usuario
#### Apaga registro do usuário com id informado do banco de dados
* DELETE  /usuariodel/{id}
#### Atualiza registro do usuário com id informado
* PUT     /usuarioup/{id}

## Informações sobre o POST e o PUT
Para inserção ou atualização do usuário insira o registro em formato json contento o campo em letra minúscula assim como no exemplo abaixo:

``` s
{
    "nome": "Nome do Usuário",
    "telefone": "0000-000",
    "email": "usuario@exemplo.com",
    "endereco": "Rua do usuário, 15",
    "senha": "12345678"
}

```
Obs: A senha deve conter no máximo 8 caracteres.

## Testes
Para tests unitários após ter inicializado o banco de dados utilize rode o seguinte comando a partir de um terminal:

``` s
npm test
```








