const Profile = require('../models/profileModel');

exports.getAllProfile = async (req, res) => {
	try {
		const profiles = await Profile.find();
		res.status(200).json({
			status: 'success',
			data: profiles
		});
	} catch (error) {
		console.error(error);
	}
};
exports.getProfile = async (req, res) => {
	try {
		const profile = await Profile.findById(req.params.id);
		res.status(200).json({
			status: 'success',
			data: profile
		});
	} catch (error) {
		console.error(error);
	}
};

exports.createProfile = async (req, res) => {
	try {
		const newProfile = await Profile.create(req.body);
		res.status(200).json({
			status: 'success',
			profile: newProfile
		});
	} catch (error) {
		console.error(error);
	}
};

exports.deleteProfile = async (req, res) => {
	try {
		await Profile.findOneAndDelete(req.params.id);
		res.status(200).json({
			status: 'success',
			profile: null
		});
	} catch (error) {
		console.error(error);
	}
};
