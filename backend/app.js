const express = require('express');
const morgan = require('morgan');
const app = express();
const profileRoute = require('./routes/profileRoute');
const quizRoute = require('./routes/quizRoute');
// 1) Middleware -> show request data in console
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

app.use(express.json());

app.use('/api/v1/profile', profileRoute);
app.use('/api/v1/quiz', quizRoute);

module.exports = app;
