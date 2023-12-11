# BOARDCAMP

## Descrição geral
Aplicação back-end que consiste em um sistema de gestão de uma locadora de jogos de tabuleiro, fazendo a utilização de um banco de dados relacional (PostgreSQL).

## Funcionalidades
- Jogos: inserir novos jogos no estoque e listar os disponíveis;
- Customers/clientes: cadastrar e listar clientes, além da opção de busca específica por um cliente utilizando seu ID e a possibilidade de atualizar os dados do mesmo;
- Rentals/aluguéis: inserir/registrar o ato de alugar e finalizar aluguéis de jogos por clientes, listar todos os aluguéis em andamento no momento da requisição e deletar os registros dos que já foram finalizados.

## Tecnologias/linguagens/bibliotecas utilizadas:

- JavaScript
- PostgreSQL
- Express
- cors
- joi
- @hapi/joi
- dotenv
- dayjs
- node.js (versão 16.17.0)
- nodemon

## Executando a aplicação localmente
- Instalar as dependências necessárias com o comando "npm install ou npm i";
- Seguir as instruções contidas no arquivo .env.example;
- Baixar o arquivo .zip presente em "releases" (link: https://github.com/patrickdemurtas/board-camp/releases/tag/v1.0.0), extrair a pasta contida no arquivo e, dentro da mesma, executar o comando <sudo bash ./create-database> para criação das tabelas necessárias à aplicação;
- Rodar o comando "npm run dev" para iniciar o servidor localmente em sua máquina;
- Utilizar uma extensão de sua preferência para testar/fazer as requisições que a aplicação permite (recomendação no caso de utilizar o VS Code: Thunder Client).

## Sugestões:
Sugestões e contribuições são bem-vindas, assim como apontamento de bugs e melhorias de código.