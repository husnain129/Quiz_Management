const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
	// 1) Transpoter
	const transpoter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.EMAIL_USERNAME,
			pass: process.env.EMAIL_PASSWORD
		}
		// Activate in gmial "less secure app" option
	});
	// 2) Define the email options
	const mailOptions = {
		from: 'Hunny Khan <mlhlk1212@gmail.com>',
		to: options.email,
		subject: options.subject,
		text: options.message
		// html:options.message,
	};
	// 3) Actually send the email
	await transpoter.sendMail(mailOptions);
};
module.exports = sendEmail;
