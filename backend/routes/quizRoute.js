const express = require('express');
const quizController = require('../controllers/quizController');
const userController = require('../controllers/userController');
const router = express.Router();

router
	.route('/')
	// .get(userController.protect, quizController.getAllQuizes)
	.get(quizController.getAllQuizes)
	.post(quizController.createQuize)
	.post(quizController.createAttemptQuize);
router.route('/:id').get(quizController.getQuize).patch(quizController.updateQuize).delete(quizController.deleteQuize);

module.exports = router;
