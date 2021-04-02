# desafio-compasso-uol-cypress


Desafio proposto com o objetivo de automatizar um cenário utilizando Cypress.

Cenário: Adicionar o primeiro no carrinho o primeiro produto retornado de uma busca.

Produto: Faded Short Sleeve.

# Configurações
## Pré-requesitos
- Node-js
- Vs Code

## Clonar repositório e preparar ambiente:
1. Abra o terminal na pasta onde deseja clonar o projeto e execute:

> git clone https://github.com/juliomarques56/desafio-compasso-uol-cypress.git

2. Abra o VS Code e em seguida, abra um novo terminal do proprio VS Code e execute:

> npm install


## Executar teste
- Comando para executar teste
> npx cypress open

- Comando para executar em background e enviar report para Dashboard.
> npx cypress run --record --key 0ed1e101-5382-43e1-b6d8-f58f57d8446c


## Executar teste em Docker

Para executar o projeto em Docker é nescessário instalar Docker na maquina.
> docker-compose up --exit-code-from cypress



## Relatório

> https://dashboard.cypress.io/projects/sv4bmm/runs/2/overview

