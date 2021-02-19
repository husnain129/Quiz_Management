import React from 'react';
import Navbar from './components/Navbar';
// import QuizForm from './components/Pages/QuizForm';
// import AnswerForm from './components/Pages/AnswerForm';
import Profile from './components/Pages/Profile';
function App() {
	return (
		<div>
			<Navbar></Navbar>
			{/* <Home /> */}
			<Profile />
			{/* <QuizForm /> */}
		</div>
	);
}

export default App;
