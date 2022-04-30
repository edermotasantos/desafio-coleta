const checkAnswers = (Pergunta4) => {
  if (typeof Pergunta4  === 'undefined') return true;
};

const checkAnswerLength = (Pergunta4) => {
  if (Pergunta4.length < 15) return true; 
  //   No Front End a caixa de texto terá limite máximo de 200 caracteres
};


module.exports = {
  checkAnswers,
  checkAnswerLength
};
