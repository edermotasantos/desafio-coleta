# Desafio Coleta

<div> 
  <a href="https://www.linkedin.com/in/eder-santos-dev/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
  <a href = "mailto:eder.mota@outlook.com"><img src="https://img.shields.io/badge/Microsoft_Outlook-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white" target="_blank"></a> 
</div>

## Contexto

---

Esse projeto foi desenvolvido para uma vaga de full stack na empresa GRX Soluções.

A proposta era desenvolver uma aplicação full stack para enviar respostas de um formulário do front end para o back end preenchendo um arquivo txt, contabilizando a quantidade de respostas positivas, negativas e não-avalidas, essa última para o caso do usuário não saber a resposta. 

Foi proposto que o desafio técnico fosse disponibilizado no Github e fosse trabalhado com boas práticas atendendo Orientação ao Objeto, conceitos de SOLID, Clean Code e KISS.

Os Dados deve ser recebido em formato JSON da seguinte forma:

```json
{
    "Pergunta1": "Sim",
    "Pergunta2": "Sim",
    "Pergunta3": "Agora!!",
    "Pergunta4": "Quero conhecer mais sobre a empresa, desafios e superá-los em conjunto com um time incrível!"
}
```

E enviados para o arquivo txt e o banco de dados no formato JSON, dessa maneira:

```json
{
  "Pergunta1":"Sim",
  "Pergunta2":"Sim",
  "Pergunta3":"Agora!!",
  "Pergunta4":"Quero conhecer mais sobre a empresa, desafios e superá-los em conjunto com um time incrível!",
  "QuantidadePositiva":4,
  "QuantidadeNegativa":0,
  "QuantidadeNaoAvaliada":0
}
```


Após receber os dados, deve ser feito um cálculo da quantidade de respostas positivas, negativas e não-avaliativas de maneira acumulativa.

## Stacks utilizadas para o desenvolvimento:
- Node.js
- Mongoose
- React.js (Context API e React Hooks)
- React Bootstrap

O desenvolvimento da aplicação foi feito no VSCODE, inicialmente trabalhado o back end através do Node.js com Mongoose. Foi utilizado o POSTMAN para testar se a a aplicação estava populando corretamente e o MongoDB Compass para visualizar o banco de dados. Logo após foi criada uma função para o preenchimento de um arquivo txt de modo a atender os requisitos inicias.
No front end me propus a trabalhar com React (Context API e React Hooks) para o desenvolvimento das funções, renderização e a estilização da página ficou por conta do react bootstrap.

## Como instalar

Pre-requisitos para rodar o projeto: 
- mongoDB
- React.js

Copie o ssh do projeto `git@github.com:edermotasantos/desafio-coleta.git`

* Abra um terminal no seu computador e utilize os comandos a baixo na ordem que são apresentados:

  * `git clone git@github.com:edermotasantos/desafio-coleta.git`
  * `cd desafio-coleta`
  * `npm install`
  * `npm run dev`

A inicialização da aplicação deve ser feita na pasta `/desafio-coleta` com o comando `npm run dev` que irá rodar tanto o front end (client) como o back end (server). Isso ocorre devido a configuração em package.json do back end, tendo em scripts as seguintes configurações:


```json
"scripts": {
    "client": "npm start --prefix client",
    "server": "nodemon server.js",
    "test": "jest --testEnvironment=node --runInBand ./tests",
    "lint": "./node_modules/.bin/eslint .",
    "dev": "concurrently \"npm run server\" \"npm run client\""
},
```

  
  A aplicação está configurada para rodar o back end (server) na porta local 3001, enquanto o front end (client) irá rodar na porta 3000. Localmente foi utilizado um arquivo `.env` (não enviado para o github) para as configurações locais, mas as funções estão configuradas para que também possa ser utilizadas sem esse arquivo.

---

## Modo de utilização

A API consta com 2 rotas: 
* `/` [`POST`] Insere um novas respostas
 * `/answers` [`GET`]  Pegar a última resposta
---

## Desenvolvimento

---
Durante o desenvolvimento do front end (client), no envio para a inserção de novas respostas, foi decidido utilizar o dado que retorna desta inserção utilizando o método POST. Sendo utilizados os dados para serem exibidos na renderização das quantidades de respostas.

### Tecnologias

---

Inicialmente foi utilizado Node.js com Mongoose, depois React.js e React Bootstrap.

---

### Banco de dados

Foi utilizado o MongoDB pela fácil inserção e extração de dados.

---

## Etapas Desafiadoras

Tive pouca dificuldade em back end. No começo comecei a desenvolver um código pensando não só em uma lógica em que fosse necessário armazenar a quantidade de cada resposta enviada, mas considerando um banco de dados inicialmente já preenchido. Logo após mudei o código, tendo em vista que não é necessário fazer busca no banco de dados para depois fazer a inserção das novas respostas com suas quantidades acumuladas.
No front end tive uma certa dificuldade em alguns pontos. O primeiro foi nao conseguir setar um valor quando era direcionado a página de respostas. Devido ao fato de que me propus a utilizar hooks para setar as respostas e utilizar o mesmo botão que o chama como call back também para direcionar para outra página com o <Navigate /> (React Router Dom v6) tive dificuldade em armazenar os dados. Após notar que tão cedo não conseguiria uma solução com o <Navigate/>, entendi que para o contexto seria bom aplicar uma renderização condicional, não sendo necessário o uso do Navigate.
Foram feitos também desenvolvidos testes utilizando Jest.

## Etapas Ausentes ou que precisam ser melhoradas

* Precisa ser feitos mais Testes TDD
* Refatoração do código e organização das mensagem de erro
* Criação de mais validadores no back end
* Correção de espaçamento e cores na estilização


## Próximos passos

* Implementação de testes no Front End e no Back End
* Treinar mais a aplicação do <Navigate/> ao setar valor
* Implementação de Token de acesso e login
* Deploy no Heroku


---


# Entre em contato:

<div> 
  <a href="https://www.linkedin.com/in/eder-santos-dev/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
  <a href = "mailto:eder.mota@outlook.com"><img src="https://img.shields.io/badge/Microsoft_Outlook-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white" target="_blank"></a> 
</div>
