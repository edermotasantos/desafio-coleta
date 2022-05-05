const frisby = require('frisby');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const mongoDbUrl = `mongodb://${process.env.HOSTNAME || 'mongodb'}:27017/desafio-coleta`;
const url = 'http://localhost:3001';

describe('1 - Crie um endpoint para cadastro de perguntas', () => {
  let connection;
  let db;
 
  beforeAll(async () => {
    connection = await MongoClient.connect(mongoDbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = connection.db('Cookmaster');
  });
  beforeEach(async () => {
    await db.collection('answers').deleteMany({});
    const answers = [
      { Pergunta1: 'Sim', Pergunta2: 'Sim', Pergunta3: 'Agora!!', Pergunta4: 'Quero conhecer mais sobre a empresa, desafios e superá-los em conjunto com um time incrível!' },
      { Pergunta1: 'Sim', Pergunta2: 'Não', Pergunta3: 'Não Sei', Pergunta4: 'Não Sei, mas quero saber mais' },
    ];
    await db.collection('answers').insertMany(answers);
  });
  
  afterAll(async () => {
    await connection.close();
  });
  
  it('Será validado que é possível cadastrar perguntas respondidas', async () => {
    let result;
  
    await frisby
      .post(`${url}/`,
        {
          Pergunta1: 'Sim',
          Pergunta2: 'Sim',
          Pergunta3: 'Agora!!',
          Pergunta4: 'Quero conhecer mais sobre a empresa, desafios e superá-los em conjunto com um time incrível!',
          QuantidadePositiva: 5,
          QuantidadeNegativa: 0,
          QuantidadeNaoAvaliada: 0
        })
      .expect('status', 201)
      .then((response) => {
        const { body } = response;
        result = JSON.parse(body);
        return frisby
          .setup({
            request: {
              headers: {
                'Content-Type': 'application/json',
              },
            },
          })
          .post(`${url}/`,
            {
              Pergunta1: 'Sim', Pergunta2: 'Não', Pergunta3: 'Agora!!', Pergunta4: 'Quero conhecer mais sobre a empresa, desafios e superá-los em conjunto com um time incrível!'
            })
          .expect('status', 201)
          .then((response) => {
            const { json } = response;
            console.log(json);
            expect(json
            ).toMatchObject(
              {
                'Pergunta1': 'Sim',
                'Pergunta2': 'Não',
                'Pergunta3': 'Agora!!',
                'Pergunta4': 'Quero conhecer mais sobre a empresa, desafios e superá-los em conjunto com um time incrível!',
                'QuantidadeNaoAvaliada': 0,
                'QuantidadeNegativa': 1,
                'QuantidadePositiva': 5}
            );
          });
      });
  });

  it('Será validado que não é possível cadastrar perguntas não respondidas', async () => {
    let result;

    await frisby
      .post(`${url}/`,
        {
          Pergunta1: 'Sim',
          Pergunta2: 'Sim',
          Pergunta3: 'Agora!!',
          Pergunta4: 'Quero conhecer mais sobre a empresa, desafios e superá-los em conjunto com um time incrível!',
          QuantidadePositiva: 5,
          QuantidadeNegativa: 0,
          QuantidadeNaoAvaliada: 0,
        })
      .expect('status', 201)
      .then((response) => {
        const { body } = response;
        result = JSON.parse(body);
        return frisby
          .setup({
            request: {
              headers: {
                Authorization: result.token,
                'Content-Type': 'application/json',
              },
            },
          })
          .post(`${url}/`,
            {
              Pergunta1: 'Sim',
              Pergunta2: '',
              Pergunta3: 'Agora!!',
              Pergunta4: 'Quero conhecer mais sobre a empresa, desafios e superá-los em conjunto com um time incrível!',
              QuantidadePositiva: 5,
              QuantidadeNegativa: 0,
              QuantidadeNaoAvaliada: 0,
            })
          .expect('status', 401)
          .then((responseAdmin) => {
            const { json } = responseAdmin;
            expect(json.message).toBe('this field must be filled');
          });
      });
  });
});
  