import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import QuizQuestions from '../Utils/QuizQuestions';
const QuizGenerator = () => {
	const [value, setValue] = useState('1');
	const [questionNo, setQuestionNo] = useState([1]);
	const [imgUrl, setImageUrl] = useState('');
	const onImageChange = (e) => {
		if (e.target.files && e.target.files[0]) {
			let img = e.target.files[0];
			setImageUrl(URL.createObjectURL(img));
		}
	};
	console.log(imgUrl);
	return (
		<div className="pt-12 bg-gray-50">
			<div className="flex flex-col items-center text-center">
				<h1 className="text-4xl font-bold">Create an interactive quiz</h1>
				<div className="flex flex-col space-y-8 w-7/12 shadow-2xl h-auto my-12 p-5">
					{/* .......IMAGE UPLOADER.......... */}
					<div className="flex flex-row items-center relative justify-center w-full h-44 space-x-2 text-gray-600 bg-gray-100 cursor-pointer hover:bg-gray-200 rounded-lg transition duration-500 ease-in-out">
						{imgUrl ? (
							<div className="w-full">
								<img src={imgUrl} className="object-cover w-full rounded-xl h-44" alt="cover image" />
							</div>
						) : (
							<>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="50"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									className="block"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
									/>
								</svg>
								<p className="font-bold text-lg">upload image (Optional)</p>
							</>
						)}
						<input
							type="file"
							name="myImage"
							accept="image/*"
							onChange={onImageChange}
							className="w-full h-44 absolute opacity-0 cursor-pointer"
						/>
					</div>

					{/* ..........IMAGE UPLOADER CLOSE........... */}

					<FormControl id="first-name" isRequired>
						<FormLabel>First name</FormLabel>
						<Input placeholder="First name" />
					</FormControl>
					<FormControl id="description" isRequired>
						<FormLabel>Description</FormLabel>
						<Input placeholder="Typing the Description" />
					</FormControl>
					{/* ............QUESTION FORM............ */}
					{questionNo &&
						questionNo.map((no, ind) => (
							<QuizQuestions
								question={no}
								index={ind}
								onDelete={() => {
									setQuestionNo(questionNo.filter((v, i) => i !== ind));
								}}
							/>
						))}
					{/* ............QUESTION FORM END............ */}

					<div className="flex flex-col items-center">
						<button
							type="button"
							className="p-2 text-xl w-80 rounded-lg border-none bg-blue-600 hover:bg-blue-700 focus:outline-none"
							onClick={() => setQuestionNo([...questionNo, questionNo.length + 1])}
						>
							Add Question
						</button>
						<div className="flex flex-row pt-6 items-end space-x-2">
							<button className="text-md w-24 h-9 border-blue-600 border-opacity-100 border font-bold rounded-lg hover:bg-gray-200 focus:outline-none">
								Cancel
							</button>
							<button className="text-md w-24 h-9 border-blue-600 border-opacity-100 border font-bold rounded-lg hover:bg-gray-200 focus:outline-none">
								Save
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default QuizGenerator;
