const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
	title: {
		type: 'string',
		required: [true, 'A quiz must have title'],
		trim: true,
		maxlength: [20, 'quiz title must be less than 20 characters']
	},
	description: {
		type: 'string',
		required: [true, 'A quiz must have description'],
		maxlength: [40, 'description must be less than 40 characters']
	},
	image: String,
	questions: [
		{
			question: {
				type: 'string',
				required: [true, 'A quiz must have question']
			},
			answers: [String],
			correctKey: {
				type: Number,
				select: false
			}
		}
	],
	createdAt: { type: Date, default: Date.now }
});

const Quiz = mongoose.model('Quiz', quizSchema);
// const Question = mongoose.model('Question', questionSchema);

module.exports = Quiz;
