import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllQuiz, selectAllQuiz } from '../../features/Quiz/QuizSlice';
import QuizCard from '../Utils/QuizCard';

const Home = () => {
	const dispatch = useDispatch();
	const data = useSelector(selectAllQuiz);
	const quizStatus = useSelector((state) => state.quiz.status);
	const error = useSelector((state) => state.quiz.error);

	useEffect(() => {
		if (quizStatus === 'idle') {
			dispatch(fetchAllQuiz());
		}
	}, [quizStatus, dispatch]);
	return (
		<div className=" h-full pb-24">
			<div className="flex flex-col space-y-16 pt-8">
				<h1 className="text-center font-bold text-4xl">Latest Quiz</h1>
				<div className="flex flex-row flex-wrap justify-around ml-20 mr-20">
					{/* .....................Quiz Card............. */}
					{data.quiz && data.quiz.map((value, index) => <QuizCard data={value.data[index]} key={index} />)}
					{/* ...................QUIZ CARD END............. */}
				</div>
			</div>
		</div>
	);
};

export default Home;
