import { Switch, Textarea } from '@chakra-ui/react';
import React from 'react';
import QuizValue from './QuizValue';

const QuizQustions = ({ question, onDelete }) => {
	const [info, setInfo] = React.useState();
	return (
		<div>
			<div className="flex flex-col w-full h-auto border border-gray-300 rounded-lg p-4 shadow-lg">
				<div className="flex flex-row justify-between pb-3">
					<p>{`Question ${question}`}</p>
					<div className="flex flex-row space-x-2 items-center">
						<Switch onChange={(e) => setInfo(e.target.checked)} />
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							className="text-gray-600 cursor-pointer"
							onClick={onDelete}
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
							/>
						</svg>
					</div>
				</div>
				<Textarea placeholder="Enter Your Question Here.........." className="mb-10" />
				<QuizValue />

				{info && (
					<input
						type="text"
						placeholder="Enter your explanation"
						className="p-3 rounded-t-lg outline-none w-full h-16 bg-gray-100"
					/>
				)}
			</div>
		</div>
	);
};

export default QuizQustions;
