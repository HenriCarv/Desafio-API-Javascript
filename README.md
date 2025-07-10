# API Test Challenge

   Este projeto contém testes automatizados para a API de gerenciamento de usuários usando Cucumber.js e Pactum.JS.
   Englobando os testes

## Configuração

1. Clone o repositório:

   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio

2. Instale as dependências:

   npm install

## Executando os Testes

### Localmente

   Para executar todos os testes e gerar um relatório:

   Todos os testes são mapeados no arquivo package.json e podem ser chamados individualmente ou todos de uma só vez
   Para executar os testes, use o seguinte comando:

   npm run test ; npm run report - Para rodar todos os testes e ter um report.

   npm run loginFail ; npm run report - Para rodar teste expecifico e ter o report.

### Via GitHub Actions

   Os testes são executados automaticamente via GitHub Actions quando:
   - Um push é feito para a branch "main"
   - Uma pull request é aberta ou atualizada na branch "main"

   Para executar manualmente:
   1. Vá para a aba "Actions" no repositório do GitHub
   2. Selecione o workflow "API Test Challenge CI"
   3. Clique em "Run workflow"
   4. Escolha a branch e clique em "Run workflow"

## Estrutura do Projeto
```
├── .github
│   └── workflows # Configurações do GitHub Actions
│       └── node-tests.yml 
├── features # Arquivos .feature do Cucumber
│   └── user
│       ├── DeleteUserWithId.feature
│       ├── DeleteUserWithIdNonExistent.feature
│       ├── GetShowAllUsers.feature
│       ├── GetShowUserWithId.feature
│       ├── GetShowUserWithIdNonExistent.feature
│       ├── PostCreateNewAdminUser.feature
│       ├── PostCreateNewUser.feature
│       ├── PostLogin.feature
│       ├── PostLoginFail.feature
│       ├── PostTryCreateUserExisting.feature
│       ├── PostTryCreateUserWithInvalidInformations.feature
│       ├── PutChangeUserNonExistent.feature
│       └── PutChangeUserWithId.feature
├── page_objects # Objetos de página e endpoints
│   └── EndPoints.js
├── step_definitions # Definições dos passos do Cucumber
│   ├── CreateNewUser_steps.js
│   ├── DeleteUserWithId_steps.js
│   ├── ShowAllUsers_steps.js
│   ├── UserChange_steps.js
│   └── ShowUserWithId_steps.js
├── support # Arquivos de suporte (ex: configurações do mundo)
│   └── world.js
├── .gitignore
├── cucumber.js # Configuração do Cucumber
├── cucumber_report.html
├── cucumber_report.json
├── package.json # Dependências e scripts do projeto
├── README.md  # Este arquivo
└── report.js # Script para geração de relatórios
```

## Tecnologias Utilizadas

   - Cucumber.js
   - Pactum.JS
   - Chai (para asserções)
   - Cucumber-html-reporter

## Cobertura de Testes

   Os testes cobrem as seguintes operações:

### Usuários
   1. Criação de Usuário (POST /usuarios)
   2. Listagem de Usuários (GET /usuarios)
   3. Busca de Usuário Específico (GET /usuarios/{id})
   4. Atualização de Usuário (PUT /usuarios/{id})
   5. Exclusão de Usuário (DELETE /usuarios/{id})

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

## Observações

   Há um problema conhecido na atualização de usuários inexistentes, onde a API responde com um código de status  201 e cria um novo usuário em vez de retornar um erro.


## CI/CD

   Este projeto utiliza GitHub Actions para execução automática dos testes. O workflow está configurado para rodar   os testes em cada push e pull request para a branch principal.

## Relatórios

   Após a execução dos testes, um relatório HTML é gerado automaticamente. 
   - Para execuções locais: O relatório pode ser encontrado em `cucumber_report.html`
   - Para execuções via GitHub Actions: O relatório está disponível como um artefato na execução do workflow

## Autores

   Henrique de Carvalho - Inmetrics - https://github.com/HenriCarv