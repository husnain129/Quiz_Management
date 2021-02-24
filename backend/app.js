const express = require('express');
const morgan = require('morgan');
const app = express();
const profileRoute = require('./routes/profileRoute');
const quizRoute = require('./routes/quizRoute');
const userRoute = require('./routes/userRoute');
const AppError = require('./utils/appError');
const GlobalErrorHandler = require('./controllers/errorController');

app.use(express.json());

app.use('/api/v1/profile', profileRoute);
app.use('/api/v1/quiz', quizRoute);
app.use('/api/v1/user', userRoute);

app.all('*', (req, res, next) => {
	next(new AppError(`can't find ${req.originalUrl} from this server`, 404));
});

app.use(GlobalErrorHandler);
// 1) Middleware -> show request data in console
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

module.exports = app;
