const Answers = require('../services/answers');
const Counters = require('../util/counters');
const TxtStore = require('../util/txtStore');
const ModelAnswers = require('../models/answers');

const index = (_req, res) => {
  res.json({ message: 'Respostas regitradas com sucesso com sucesso!' });
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

    data = { _id, ...data };
  
    TxtStore.writeFile(data);

    return res.status(201).json(data);
  } catch (error) {
    return res.status(500).json({ mensage: 'please, try later' });
  }
};

const readAnswersById = async (_req, res) => {
  try {
    const findAnswersById = await ModelAnswers.find({}).sort({_id:-1}).limit(1); // para buscar o útimo item inserido

    if (!findAnswersById) return res.status(404).json('no answer found. try later');

    return res.status(200).json(findAnswersById);
  } catch (error) {
    return res.status(500).json({ mensage: 'please, try later' });
  }
};

module.exports = {
  index,
  create,
  readAnswersById,
};
