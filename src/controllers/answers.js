const Answers = require('../services/answers');
const ModelAnswers = require('../models/answers');
const fs = require('fs');

const arrayOfJsonAnswers = [];
const obj = {};

const index = (_req, res) => {
  res.json({ message: 'Respostas regitradas com sucesso com sucesso!' });
};

const answerCounter = (Pergunta1, Pergunta2, Pergunta3) => {
  if (Object.keys(obj).length === 0) {
    obj['S'] = 0; // 'S' caso a resposta for “Sim” ou “Agora
    obj['N'] = 0; // 'N' caso a resposta for “Não
    obj['A'] = 0; // 'A' caso a resposta for “Não Sei”
  }

  obj[Pergunta1[0]] += 1; // A primeira letra é o mesmo nome da chave que será somada
  obj[Pergunta2[0]] += 1; // pode ser "Não"[0] = "N" ou "Sim"[0] = "S" 
  if (Pergunta3 === 'Não Sei'){
    obj['A'] += 1;
    return obj;
  }
  if (Pergunta3 === 'Agora!!'){
    obj['S'] += 1;
    return obj;
  }
  obj[Pergunta3[0]] += 1;
  return obj;
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
    const { S, N, A } = answerCounter(Pergunta1, Pergunta2, Pergunta3);

    // 'S' caso a resposta for “Sim” ou “Agora
    // 'N' caso a resposta for “Não
    // 'A' caso a resposta for “Não Sei”

    data = {
      Pergunta1,
      Pergunta2,
      Pergunta3,
      Pergunta4,
      QuantidadePositiva: S,
      QuantidadeNegativa: N,
      QuantidadeNaoAvaliada: A,
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
