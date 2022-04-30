const Answers = require('../services/answers');

const index = (_req, res) => {
  res.json({ message: 'Respostas regitradas com sucesso com sucesso!' });
};

const create = async (req, res) => {
  try {
    const { Pergunta1, Pergunta2, Pergunta3, Pergunta4 } = req.body;
    let data = {};

    data = { Pergunta1, Pergunta2, Pergunta3, Pergunta4 };
    const answers = await Answers.create(data);
    return res.status(201).json(answers);
  } catch (error) {
    return res.status(500).json({ mensage: 'tente novamente mais tarde' });
  }
};

module.exports = {
  index,
  create,
};
