const express = require('express');

const routes = express.Router();

const Answers = require('../controllers/answers');

routes.get('/', Answers.index);
routes.post('/', Answers.create);
routes.get('/answers', Answers.readAllAnswers);

module.exports = routes;