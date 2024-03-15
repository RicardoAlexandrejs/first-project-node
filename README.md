<h1>Primeira Aplicação em NODE.js 💻</h1>
<hr>
<p>Este projeto consiste na criação de um CRUD (Create, Read, Update and Delete) com o objetivo de demonstrar uma aplicação sem muitas linhas de código, mas enfatizando suas funcionalidades principais.</p>
<hr>
<strong>CRUD é um acrônimo em inglês que representa as quatro operações básicas utilizadas em sistemas de gerenciamento de banco de dados relacionais. Cada letra representa uma operação:</strong>
<br><br>
<li>Create ➡ POST</li>
<li>Read ➡ GET</li>
<li>Update ➡ PUT</li>
<li>Delete ➡ DELETE</li>
<br>
Create (Criar): Refere-se à operação de criar novos registros ou entidades no banco de dados.<br>
Read (Ler): Refere-se à operação de ler ou recuperar informações existentes do banco de dados.<br>
Update (Atualizar): Refere-se à operação de atualizar informações existentes no banco de dados, como modificar um registro ou uma entidade já existente.<br>
Delete (Excluir): Refere-se à operação de excluir registros ou entidades do banco de dados.<br>
<br>
Essas quatro operações formam a base para a manipulação de dados em sistemas de gerenciamento de banco de dados, e são comumente utilizadas em aplicações e sistemas que lidam com armazenamento e manipulação de informações.
<hr>
<h3><p>Utilizado para o desenvolvimento da primeira aplicação:</p></h3>
<table>
  <tr align="center">
    <td><img src = "https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt = "javascript"></td>
    <td><img src = "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt = "node"></td>
    <td><img src = "https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt = "express"></td>
    <td><img src = "https://img.shields.io/badge/Insomnia-5849be?style=for-the-badge&logo=Insomnia&logoColor=white" alt = "insomnia"></td>
    
  </tr>
  <tr>
     <td>Arquivo em <br>JavaScript.</td>
    <td>Ambiente de <br>execução<br> JavaScript.</td>
    <td>framework -<br> fornece um conjunto robusto de <br>recursos para aplicativos web e móvel.</td>
    <td>framework - <br> para Testar as rotas criadas<br> e demonstrar do lado do cliente.</td>
   
  </tr>
</table>
<hr>

<h1>Start / Inicialização 💻</h1>
## <h4>Instalação</h4>

* Clone o repositório: `git clone [https://github.com/RicardoAlexandrejs/first-project-node]`
* Ou baixe os arquivos para seu Desktop
* Acesse o diretório do projeto: `first-project-node`
* Instale as dependências: `npm install`
* Inicie o servidor: `npm run dev` - Foi inserido um script no package.json para utilizar o nodemon <h6>( O nodemon é um utilitário que monitora as mudanças nos arquivos do seu projeto e reinicia automaticamente o servidor Node. js quando necessário. Assim, você não precisa parar e iniciar o servidor manualmente a cada modificação)</h6>
* Crie as rotas no insomnia como mostrado abaixo:
  ![insomnia](https://github.com/RicardoAlexandrejs/first-project-node/assets/158041416/b8c27793-a688-4033-9d53-45965b27eb36)
  <br>
* Crie alguns usuários na rota de POST (create user): `Alterando o nome e a idade e clique no botão SEND (enviar)`
![insomnia-post](https://github.com/RicardoAlexandrejs/first-project-node/assets/158041416/8bd8c618-8395-4b40-85d7-b85a87f83245)

* Após a criação acesse a rota de GET (users) e clique no botão botão SEND (enviar) para visualizar os usuários criados:
  ![insomnia-get](https://github.com/RicardoAlexandrejs/first-project-node/assets/158041416/b9228305-7191-4014-bb70-37c961add96b)

* Para atualizar alguma informação copie um ID gerado na rota GET e depois acesse a rota de PUT (update):<br>
01 - cole o ID copiado no endereço da rota.<br>
02 - Digita as novas informações para atualizar<br>
e clique no botão botão SEND (enviar) para visualizar o usuário atualizado<br>
![insomnia-put](https://github.com/RicardoAlexandrejs/first-project-node/assets/158041416/6ecbcc03-06ac-4c36-bf98-d2096348266a)

* Para Deletar alguma informação copie um ID gerado na rota GET e depois acesse a rota de DEL(delete):<br>
01 - cole o ID copiado no endereço da rota.<br>
e clique no botão botão SEND (enviar) para deletar o usuário <br>
02 - volte na rota de GET(users) clique em enviar e confirme se o usuário foi deletado.
![insomnia-delete](https://github.com/RicardoAlexandrejs/first-project-node/assets/158041416/a40312a6-fb00-4a39-b81f-d4cdebc8f635)
<hr>
Obrigado por visualizar até aqui!!!

## <h4>About / Quem sou</h4>

Ricardo Alexandre js - https://github.com/RicardoAlexandrejs
