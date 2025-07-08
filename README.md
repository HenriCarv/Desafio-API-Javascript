# API Test Challenge

Este projeto contém testes automatizados para a API de gerenciamento de usuários usando Cucumber.js e Pactum.JS.
Englobando os testes

## Configuração

1. Clone o repositório
2. Instale as dependências:

npm install

## Executando os testes

Todos os testes são mapeados no arquivo package.json e podem ser chamados individualmente ou todos de uma só vez
Para executar os testes, use o seguinte comando:

npm run test ; npm run report - Para rodar todos os testes e ter um report.
npm run loginFail ; npm run report - Para rodar teste expecifico e ter o report.

## Estrutura do Projeto

- `features/`: Contém os arquivos de feature do Cucumber
- `step_definitions/`: Contém as definições dos passos do Cucumber
- `page_objects/`: Contém os EndPoints utilizados e tratamentos de response code
- `support/`: Contém arquivos de suporte, como configurações do mundo do Cucumber

## Tecnologias Utilizadas

- Cucumber.js
- Pactum.JS
- Chai (para asserções)
- Cucumber-html-reporter

## Cobertura de Testes

Os testes cobrem as seguintes operações:

- LOGIN
- USUÁRIOS

1. Testes planejados:

   a. Criação de Usuário (POST /usuarios):
   - Criar um usuário administrador com sucesso
   - Criar um usuário normal com sucesso
   - Tentar criar um usuário com email já existente
   - Tentar criar um usuário com dados inválidos

   b. Listagem de Usuários (GET /usuarios):
   - Listar todos os usuários

   c. Busca de Usuário Específico (GET /usuarios/{id}):
   - Buscar um usuário existente por ID
   - Tentar buscar um usuário com ID inexistente

   d. Atualização de Usuário (PUT /usuarios/{id}):
   - Atualizar um usuário existente com sucesso
   - FAIL - Tentar atualizar um usuário inexistente (Teste não passou, ao tentar mudar um usuario com ID inexistente a API responde 
   
   Response: {
  "statusCode": 201,
  "body": {
    "message": "Cadastro realizado com sucesso",
    "_id": "bVX8N0PqjGc6loX4"
  }
  
  

   e. Exclusão de Usuário (DELETE /usuarios/{id}):
   - Excluir um usuário existente com sucesso
   - Tentar excluir um usuário inexistente

2. Testes de Autenticação:
   - Login com credenciais válidas
   - Tentar login com credenciais inválidas

## Autores

Henrique de Carvalho - Inmetrics - https://github.com/HenriCarv