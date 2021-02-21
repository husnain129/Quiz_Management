const express = require('express');
const quizController = require('../controllers/quizController');
const router = express.Router();

router.route('/').get(quizController.getAllQuizes).post(quizController.createQuize);
router.route('/:id').get(quizController.getQuize).patch(quizController.updateQuize).delete(quizController.deleteQuize);

module.exports = router;
