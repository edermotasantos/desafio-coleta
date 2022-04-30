const {
  checkAnswers,
  checkAnswerLength,
} = require('../util/validations');
const Error = require('../util/errors');
const Answers = require('../models/answers');

const create = async ({ Pergunta1, Pergunta2, Pergunta3, Pergunta4 }) => {
  const answersError = await checkAnswers(Pergunta4);
  const lengthAnswersError = await checkAnswerLength(Pergunta4);

  if(answersError) return Error.missingData;
  if(lengthAnswersError) return Error.invalidlenght;

  const answers = await Answers.create({ Pergunta1, Pergunta2, Pergunta3, Pergunta4 });
  return answers;
};

module.exports = {
  create,
};
