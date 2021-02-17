import React from 'react';
import Navbar from './components/Navbar';
// import QuizForm from './components/Pages/QuizForm';
// import AnswerForm from './components/Pages/AnswerForm';
import Home from './components/Pages/Home';
function App() {
	return (
		<div>
			<Navbar></Navbar>
			<Home />
			{/* <AnswerForm /> */}
		</div>
	);
}

export default App;
