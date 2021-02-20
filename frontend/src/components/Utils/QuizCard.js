import React from 'react';
import { Link } from 'react-router-dom';
const QuizCard = () => {
	return (
		<div>
			<div className="flex flex-col relative rounded-xl shadow-2xl w-80 h-96 mb-12 p-2">
				<img
					src="http://res.cloudinary.com/mjcarnaje/image/upload/v1613021380/profiles/wzsq5f3fghopwundk3ji.jpg"
					alt=""
					className="rounded-md h-48"
				/>
				<div className="flex flex-row items-center text-center pt-4 space-x-2">
					<img
						src="blob:http://localhost:3000/c6d349e8-0ce7-42f8-bc44-24791a7b14d5"
						className="rounded-full h-14 w-14 flex items-center justify-center"
						alt=""
					/>
					<div className="flex flex-col flex-none">
						<h1 className="font-bold">Husnain</h1>
						<p className="text-gray-400">6 days</p>
					</div>
				</div>
				<div className="flex flex-none text-center pt-3 px-2">
					<p>Complete the quize and lets see how much you know</p>
				</div>
				<div className="text-red-400 py-4">
					<div className="flex flex-row items-center justify-around px-auto space-x-4">
						<div className="flex flex-row space-x-1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								className="cursor-pointer"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
								/>
							</svg>
							<span>3</span>
						</div>
						<div className="flex flex-row space-x-1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								className="cursor-pointer"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
								/>
							</svg>
							<span>4</span>
						</div>
						<Link to="/answer-form" className="flex focus:outline-none">
							<div className="flex flex-row space-x-2 cursor-pointer hover:bg-gray-200 px-2 py-1 rounded-lg">
								<p>Take Quiz</p>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
									/>
								</svg>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default QuizCard;
