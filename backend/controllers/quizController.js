const Quiz = require('../models/quizModel');

exports.getAllQuizes = async (req, res) => {
	try {
		const quizes = await Quiz.find();
		res.status(200).json({
			status: 'success',
			data: quizes
		});
	} catch (error) {
		console.error(error);
	}
};

exports.getQuize = async (req, res) => {
	try {
		const quiz = await Quiz.findById(req.params.id);
		res.status(200).json({
			status: 'success',
			data: quiz.questions
		});
	} catch (error) {
		console.error(error);
	}
};
exports.createQuize = async (req, res) => {
	try {
		const quiz = await Quiz.create(req.body);
		res.status(200).json({
			status: 'success',
			data: quiz
		});
	} catch (error) {
		console.error(error);
	}
};
exports.updateQuize = async (req, res) => {
	try {
		const quiz = await Quiz.findByIdAndUpdate(req.params.id, req.body, {
			runValidators: true
		});
		res.status(200).json({
			status: 'success',
			data: quiz
		});
	} catch (error) {
		console.error(error);
	}
};

exports.deleteQuize = async (req, res) => {
	try {
		await Quiz.findByIdAndDelete(req.params.id);
		res.status(200).json({
			status: 'success',
			data: null
		});
	} catch (error) {
		console.error(error);
	}
};
