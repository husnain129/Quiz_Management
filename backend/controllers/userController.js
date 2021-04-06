const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const { promisify } = require('util');
const sendEmail = require('../utils/email');
// Generate JWT token

const signToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_EXPIRES_IN
	});
};

const createSendToken = (user, statusCode, res) => {
	const token = signToken(user._id);
	const cookieOptions = {
		expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
		secure: true,
		httpOnly: true
	};
	res.cookie('jwt', token, cookieOptions);

	//remove user password to show
	user.password = undefined;
	res.status(statusCode).json({
		status: 'success',
		token,
		User: user
	});
};

exports.getAllUser = catchAsync(async (req, res, next) => {
	const users = await User.find();
	res.status(200).json({
		status: 'success',
		users
	});
});

exports.getUser = catchAsync(async (req, res, next) => {
	const user = await User.findById(req.params.id);
	createSendToken(user, 200, res);
});

exports.signup = catchAsync(async (req, res, next) => {
	const newUser = await User.create({
		name: req.body.name,
		email: req.body.email,
		photo: req.body.photo,
		password: req.body.password,
		confirmPassword: req.body.confirmPassword
	});
	createSendToken(newUser, 201, res);
});

exports.login = catchAsync(async (req, res, next) => {
	const { email, password } = req.body;

	//1) Check if email and password exist
	if (!email || !password) {
		return next(new AppError('Please provide a email or password', 400));
	}

	//2) Check if given email and password are correct
	const user = await User.findOne({ email }).select('+password');
	const correct = await user.correctPassword(password, user.password);
	if (!email || !correct) {
		return next(new AppError('Incorrect Email or Password', 401));
	}
	//3) if everything is ok, send back token
	createSendToken(user, 200, res);
});

exports.protect = catchAsync(async (req, res, next) => {
	// 1) Getting the token and check if it there
	let token;
	if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
		token = req.headers.authorization.split(' ')[1];
	}
	if (!token) {
		return next(new AppError('You are not logged in.Please login to get access', 401));
	}
	// 2) Verification token

	const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
	console.log(decoded);

	// 3) Check if the user is exist
	const currentUser = await User.findById(decoded.id);
	if (!currentUser) {
		return next(new AppError("The user belong to this token doesn't exist", 401));
	}
	// 4) Check if the user Change password after the token was issued
	if (currentUser.passwordChangeAfter(decoded.iat)) {
		return next(new AppError('User recently change password, Please login again', 401));
	}

	// 5) Grant access to protected routes
	req.user = currentUser;
	next();
});

exports.forgotPassword = catchAsync(async (req, res, next) => {
	// 1) Get user based on Posted email
	const user = await User.findOne({ email: req.body.email });
	if (!user) {
		return next(new AppError('There is not user with this email', 404));
	}
	// 2) Generate random reset token
	const resetToken = user.createPasswordResetToken();
	await user.save({ validateBeforeSave: false });

	// 3) Send it to user email address
	const resetUrl = `${req.protocol}://${req.get('host')}/api/v1/user/resetPassword/${resetToken}`;
	const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirm to: ${resetUrl}.\n If you don't forgot this password, please ignore this email`;
	try {
		await sendEmail({
			email: user.email,
			subject: 'Your password reset token {valid for 10 minute}',
			message
		});
		res.status(200).json({
			status: 'success',
			message: 'Token send to email'
		});
	} catch (error) {
		user.passwordResetToken = undefined;
		user.passwordResetExpires = undefined;
		await user.save({ validateBeforeSave: false });
		return next(new AppError(error, 500));
	}
});

exports.resetPassword = catchAsync(async (req, res, next) => {
	// 1) get user based on token
	const hasedToken = crypto.createHash('sha256').update(req.params.token).digest('hex');

	const user = await User.findOne({ passwordResetToken: hasedToken, passwordResetExpires: { $gt: Date.now() } });
	// 2) if token has not expired and user exist, then set new password
	if (!user) {
		return next(new AppError('Token is invalid or has expired', 400));
	}
	user.password = req.body.password;
	user.confirmPassword = req.body.confirmPassword;
	user.passwordResetToken = undefined;
	await user.save();
	// 3) update changePassowrdAt property of user
	// 4) LOG the user in, send JWT
	createSendToken(user, 200, res);
	next();
});

exports.updatePassword = catchAsync(async (req, res, next) => {
	// 1) Get user from collection
	const user = await User.findById(req.user.id).select('+password');

	// 2) Check if posted current password is correct
	if (!(await user.correctPassword(req.body.currentPassword, user.password))) {
		return next(new AppError('You current passowrd is incorrect', 401));
	}
	// 3) if so, update password
	user.password = req.body.password;
	user.confirmPassword = req.body.confirmPassword;
	// 4) log user in , send token
	createSendToken(user, 200, res);
});
