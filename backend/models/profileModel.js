const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'A user must have name'],
		trim: true
	},
	bio: {
		type: String,
		maxlength: [30, 'A user cannot have bio info maximum than 30 characters']
	},
	country: String,
	dateOfBirth: Date,
	profileImage: String,
	backgroundImage: String
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
