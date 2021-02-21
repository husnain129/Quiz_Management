const mongoose = require('mongoose');

const quizAttemptSchema = new mongoose.Schema({
	title: String,
	description: String,
	image: String,
	attemptedAt: {
		type: Date,
		default: Date.now
	}
});

const QuizAttempt = mongoose.model('QuizAttempt', quizAttemptSchema);
module.exports = QuizAttempt;
