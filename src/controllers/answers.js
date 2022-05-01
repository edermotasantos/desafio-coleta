const Answers = require('../services/answers');
const Counters = require('../util/counters');
const ModelAnswers = require('../models/answers');
const fs = require('fs');

const arrayOfJsonAnswers = [];

const index = (_req, res) => {
  res.json({ message: 'Respostas regitradas com sucesso com sucesso!' });
};

const writeFile = async (data) => {
  arrayOfJsonAnswers.push(data);
  const answersString = JSON.stringify(arrayOfJsonAnswers);
  fs.writeFile('coleta-de-respostas.txt', answersString, (err) => {
    if (err) throw err;
    console.log('Arquivo coleta-de-respostas.txt criado com sucesso!');
  });
};

const create = async (req, res) => {
  try {
    const { Pergunta1, Pergunta2, Pergunta3, Pergunta4 } = req.body;
    let data = {};
    const {
      S: QuantidadePositiva,
      N: QuantidadeNegativa,
      A: QuantidadeNaoAvaliada
    } = Counters.answerCounter(Pergunta1, Pergunta2, Pergunta3);

    // 'S' caso a resposta for “Sim” ou “Agora
    // 'N' caso a resposta for “Não
    // 'A' caso a resposta for “Não Sei”

    data = {
      Pergunta1,
      Pergunta2,
      Pergunta3,
      Pergunta4,
      QuantidadePositiva,
      QuantidadeNegativa,
      QuantidadeNaoAvaliada,
    };

    const { _id } = await Answers.create(data);

    data = {
      _id,
      ...data,
    };
  
    writeFile(data);

    return res.status(201).json(data);
  } catch (error) {
    return res.status(500).json({ mensage: 'please, try later' });
  }
};

const readAllAnswers = async (req, res) => {
  try {
    const findAllAnswers = await ModelAnswers.find();

    if (!findAllAnswers) return res.status(404).json('no answer found. try later');

    return res.status(200).json(findAllAnswers);
  } catch (error) {
    return res.status(500).json({ mensage: 'please, try later' });
  }
};

module.exports = {
  index,
  create,
  readAllAnswers,
};
