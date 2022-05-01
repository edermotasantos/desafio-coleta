const fs = require('fs');

const arrayOfJsonAnswers = [];

const writeFile = async (data) => {
  arrayOfJsonAnswers.push(data);
  const answersString = JSON.stringify(arrayOfJsonAnswers);
  fs.writeFile('coleta-de-respostas.txt', answersString, (err) => {
    if (err) throw err;
    console.log('Arquivo coleta-de-respostas.txt criado com sucesso!');
  });
};

module.exports = {
  writeFile,
};