const Quiz = require('../models/quizModel');
const QuizAttempt = require('../models/quizAttemptModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getAllQuizes = catchAsync(async (req, res, next) => {
	const quizes = await Quiz.find();
	res.status(200).json({
		status: 'success',
		data: quizes
	});
});

exports.getQuize = catchAsync(async (req, res, next) => {
	const quiz = await Quiz.findById(req.params.id);
	if (!quiz) {
		return next(new AppError('No quiz found with that ID', 404));
	}
	res.status(200).json({
		status: 'success',
		data: quiz.questions
	});
});
exports.createQuize = catchAsync(async (req, res, next) => {
	const quiz = await Quiz.create(req.body);
	res.status(200).json({
		status: 'success',
		data: quiz
	});
});
exports.createAttemptQuize = catchAsync(async (req, res, next) => {
	const quiz = await Quiz.create(req.body);
	res.status(200).json({
		status: 'success',
		data: quiz
	});
});
exports.updateQuize = catchAsync(async (req, res, next) => {
	const quiz = await Quiz.findByIdAndUpdate(req.params.id, req.body, {
		runValidators: true
	});
	if (!quiz) {
		return next(new AppError('No quiz found with that ID', 404));
	}
	res.status(200).json({
		status: 'success',
		data: quiz
	});
});

exports.deleteQuize = catchAsync(async (req, res, next) => {
	await Quiz.findByIdAndDelete(req.params.id);
	if (!quiz) {
		return next(new AppError('No quiz found with that ID', 404));
	}
	res.status(200).json({
		status: 'success',
		data: 'Deleted Successfully'
	});
});
