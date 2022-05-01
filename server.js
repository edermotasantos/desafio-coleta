const express = require('express');

require('dotenv').config();

const cors = require('cors');

const app = express();

const mongoose = require('mongoose'); // para fazer conexão com o MongoDB

const routes = require('./src/routes/routes');

const PORT = process.env.PORT || 3001;

const mongoDbUrl = `mongodb://${process.env.HOSTNAME || 'mongodb'}:27017/desafio-coleta`;

mongoose.connect(mongoDbUrl, (error) => {
  if (error) console.log(error);
  console.log('MongoDB conectado com sucesso');
}); // para conectar com o banco de dados desafio-coleta

app.use(cors()); // para informar quais dominios podem estar consumindo os dados dessa api

app.use(express.json()); // para enviar json do front-end para o back-end

app.use(routes);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}!`));