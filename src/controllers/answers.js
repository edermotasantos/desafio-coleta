const Answers = require('../services/answers');

let last_id = undefined;
let positiveQuantity = 0;
let negativeQuantity = 0;
let unassessedQuantity = 0;

const index = (_req, res) => {
  res.json({ message: 'Respostas regitradas com sucesso com sucesso!' });
};

const create = async (req, res) => {
  try {
    const { Pergunta1, Pergunta2, Pergunta3, Pergunta4 } = req.body;
    let data = {};
    let countAnswers = await findLastAnswers(last_id, Pergunta1, Pergunta2, Pergunta3);
    
    data = {
      Pergunta1,
      Pergunta2,
      Pergunta3,
      Pergunta4,
      ...countAnswers,
    };
  
    const { _id} = await Answers.create(data);
    last_id = _id;
    return res.status(201).json({ _id, Pergunta1, Pergunta2, Pergunta3, Pergunta4 });
  } catch (error) {
    return res.status(500).json({ mensage: 'tente novamente mais tarde' });
  }
};

const findLastAnswers = async (last_id, Pergunta1, Pergunta2, Pergunta3) => {
  if (Pergunta1 === 'Sim' || Pergunta2 === 'Sim' || Pergunta3 === 'Sim' ) return positiveQuantity = 1;
  if (Pergunta1 === 'Não' || Pergunta2 === 'Não' || Pergunta3 === 'Não') return negativeQuantity = 1;
  if (Pergunta3 === 'Agora!!') return unassessedQuantity = 1;
  if (typeof last_id === 'undefined') {
    return {
      'QuantidadePositiva': 0 + positiveQuantity,
      'QuantidadeNegativa': 0 + negativeQuantity,
      'QuantidadeNaoAvaliada': 0 + unassessedQuantity,
    };
  }
  const {
    QuantidadePositiva,
    QuantidadeNegativa,
    QuantidadeNaoAvaliada
  } = await Answers.findOne({ last_id });
  return {
    'QuantidadePositiva': QuantidadePositiva + positiveQuantity,
    'QuantidadeNegativa': QuantidadeNegativa + negativeQuantity,
    'QuantidadeNaoAvaliada': QuantidadeNaoAvaliada + unassessedQuantity,
  };
};

module.exports = {
  index,
  create,
};
