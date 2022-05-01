const obj = {};

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

module.exports = {
  answerCounter
};