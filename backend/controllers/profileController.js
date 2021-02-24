const Profile = require('../models/profileModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getAllProfile = catchAsync(async (req, res) => {
	const profiles = await Profile.find();
	res.status(200).json({
		status: 'success',
		data: profiles
	});
});

exports.getProfile = catchAsync(async (req, res) => {
	const profile = await Profile.findById(req.params.id);
	if (!profile) {
		return next(new AppError('No profile found with that ID', 404));
	}
	res.status(200).json({
		status: 'success',
		data: profile
	});
});

exports.createProfile = catchAsync(async (req, res) => {
	const newProfile = await Profile.create(req.body);
	res.status(200).json({
		status: 'success',
		profile: newProfile
	});
});

exports.updateProfile = catchAsync(async (req, res) => {
	const newProfile = await Profile.findOneAndUpdate(req.params.id, req.body, {
		runValidators: true
	});
	res.status(200).json({
		status: 'success',
		profile: newProfile
	});
});

exports.deleteProfile = catchAsync(async (req, res) => {
	const profile = await Profile.findOneAndDelete(req.params.id);
	if (!profile) {
		return next(new AppError('No profile found with that ID', 404));
	}
	res.status(200).json({
		status: 'success',
		profile: null
	});
});
