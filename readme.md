# LoginApi

Uma REST Api simples que gerencia cadastro, log de usuário e a busca de informações do usuário logado que recebe e retorna dados através de JSON's via HTTP.
A senha é hasheada em MD5 antes de ser gravada no banco de dados assim como o Token é persistido junto aos dados do usuário.

## Rotas:

### GET /

Home do projeto e retorna dados apenas para mostrar que api está funcionando e retornando dados.

### POST /signup
Cadastro do usuário,

Recebe no corpo(body):
~~~
{
	"nome": "string", 
	"email": "string@demail.com",
	"senha": "string",
	"telefones": [
		 {
			 "numero": "123456789",
			 "ddd": "11"
		 }
	]
}
~~~

Em caso de sucesso retorna os dados do usuário assim como o token JWT de autenticação.

### POST /signin
Rota utilizada para autenticação, em caso de sucesso retorna os dados do usuário e seu token JWT de acesso.
O token expira em 30 minutos, após esse intervalo é necessário gerar uma nova autenticação.

Recebe no corpo(body):
~~~
{
	"email": "string@demail.com",
	"senha": "string"
}
~~~

### GET /users/userID

Busca e retorna os dados do usuário logado, onde na rota 'userID' representa o id do usuário informado nas duas rotas anteriores.
O usuário logado apenas pode visualizar os próprios dados, caso informe um id incorreto ou de outro usuário, receberá um retorno de erro.


## Testando:

Antes de tudo, renomeie o arquivo .env.example para apenas .env, alimente as variáveis: 
- SECRET_API com a hash em md5 da palavra segredo.
- DB_URL com a connection string do mongodb a ser utilizada.

Abra o terminal no mesmo diretório da aplicação e execute:

```bash

npm install

```

Assim será instalado todas as dependências, após isso para rodar a aplicação execute:

```bash

npm run dev

```

No terminal irá retornar a mensagem abaixo: 

```bash

Server ON!

```

A aplicação estará pronta para uso e as requisições poderão ser utilizadas com seu REST Client de preferência.


## Tecnologias usadas:
	- Node.js
	- Express.Js
    - MongoDB
	- JWT JSON Web Token
	- Bcrypt
	- Sucrase
    - mongoose
    - express-validator
    - dotenv
    - eslint
    - date-fns

