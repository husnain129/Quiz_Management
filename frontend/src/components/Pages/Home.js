import React from 'react';
import QuizCard from '../Utils/QuizCard';

const Home = () => {
	return (
		<div className=" h-full pb-24">
			<div className="flex flex-col space-y-16 pt-8">
				<h1 className="text-center font-bold text-4xl">Latest Quiz</h1>
				<div className="flex flex-row flex-wrap justify-around ml-20 mr-20">
					{/* .....................Quiz Card............. */}
					<QuizCard />
					<QuizCard />
					<QuizCard />
					<QuizCard />
					<QuizCard />
					<QuizCard />
					<QuizCard />
					<QuizCard />
					<QuizCard />

					{/* ...................QUIZ CARD END............. */}
				</div>
			</div>
		</div>
	);
};

export default Home;
