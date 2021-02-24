import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Auth/login';
import SignUp from './components/Auth/signUp';
import Navbar from './components/Navbar';
import AnswerForm from './components/Pages/AnswerForm';
import Home from './components/Pages/Home';
// import AnswerForm from './components/Pages/AnswerForm';
import Profile from './components/Pages/Profile';
import QuizForm from './components/Pages/QuizForm';

function App() {
	return (
		<div>
			<Router>
				<Navbar></Navbar>
				<Switch>
					<Route path="/create-quiz">
						<QuizForm />
					</Route>
					<Route path="/answer-form">
						<AnswerForm />
					</Route>
					<Route path="/profile">
						<Profile />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/signup">
						<SignUp />
					</Route>
					<Route exact path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
