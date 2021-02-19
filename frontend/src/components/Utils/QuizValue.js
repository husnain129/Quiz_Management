import { Radio, RadioGroup } from '@chakra-ui/react';
import React, { useState } from 'react';

const QuizValue = () => {
	const [value, setValue] = useState('');
	return (
		<RadioGroup onChange={setValue} value={value}>
			<div className="flex flex-row flex-wrap justify-around">
				<InputFields value="1" />
				<InputFields value="2" />
				<InputFields value="3" />
				<InputFields value="4" />
			</div>
		</RadioGroup>
	);
};

const InputFields = ({ value }) => {
	return (
		<div className="flex flex-col space-y-0 pb-6">
			<input
				type="text"
				placeholder="Type your answer here"
				className="p-3 rounded-t-lg outline-none w-80 bg-gray-100"
			/>
			<div className="flex flex-row p-1 bg-gray-300 rounded-lg">
				<RadioButton value={value} />
			</div>
		</div>
	);
};

const RadioButton = ({ value }) => {
	return (
		<Radio colorScheme="whatsapp" className="text-gray-500 border border-black text-sm outline-none" value={value}>
			Correct Answer
		</Radio>
	);
};
export default QuizValue;
