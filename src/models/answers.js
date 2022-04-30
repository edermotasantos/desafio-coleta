const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  Pergunta1: String,
  Pergunta2: String,
  Pergunta3: String,
  Pergunta4: String,
}, {
  timestamps: false,
});

const answers = mongoose.model('Answers', DataSchema);

module.exports = answers;
