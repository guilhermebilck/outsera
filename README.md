# Projeto - Avaliação Outsera - Automação de Testes

## Como Instalar e Executar os Testes

1. Certifique-se de ter instalado o Node.js e o npm.
2. Clone o repositório deste projeto.
3. Abra um terminal e navegue até a pasta do projeto.
4. Execute o seguinte comando para instalar as dependências: npm install
5. Para executar os testes localmente: npx cypress run
6. Ou para abrir o Cypress Test Runner: npx cypress open

## Estrutura do Projeto

O projeto foi estruturado com cypress e cucumber no padrão page objects.

## Integração com o Cypress Dashboard

Este projeto está configurado para enviar resultados para o Cypress Dashboard. Para visualizar os resultados:

1. https://cloud.cypress.io/projects/x5dicp/
2. Execute os testes enviando para o dashboard: npx cypress run --record --key fed40982-547c-4cd4-b3c9-02a1ea91a286
