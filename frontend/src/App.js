import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Auth/login';
import SignUp from './components/Auth/signUp';
import Navbar from './components/Navbar';
import AnswerForm from './components/Pages/AnswerForm';
import Home from './components/Pages/Home';
// import AnswerForm from './components/Pages/AnswerForm';
import Profile from './components/Pages/Profile';
import QuizForm from './components/Pages/QuizForm';
import PrivateRoute from './helper/PrivateRoute';
function App() {
	const [login, setLoggedIn] = useState(localStorage.getItem('token'));
	return (
		<div>
			<Router>
				<Navbar login={login} setLoggedIn={setLoggedIn} />
				<Switch>
					<Route exact path="/" component={Home} />
					<PrivateRoute path="/create-quiz" component={QuizForm} />
					<PrivateRoute path="/answer-form" component={AnswerForm} />
					<PrivateRoute path="/profile" component={Profile} />
					<Route path="/login" component={Login} />
					<Route path="/signup">
						<SignUp />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
