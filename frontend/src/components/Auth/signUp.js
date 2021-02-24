import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import FormButton from './FormButton';
const SignUp = () => {
	const [btnError, setBtnError] = useState(true);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [email, setEmail] = useState('');
	const [step, setStep] = useState(1);

	var err;
	const formValidation = () => {
		if (password.length < 8) {
			return false;
		} else {
			validateEmail(email);
			return true;
		}
	};
	const validateEmail = (email_val) => {
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		var test = re.test(String(email_val).toLowerCase());
		console.log(test);
	};
	return (
		<div className="flex justify-center w-full bg-gray-100 items-center" style={{ height: '91vh' }}>
			<div className="flex flex-col space-y-3 w-1/3 h-3/4 bg-white shadow-2xl text-center ">
				<h1 className="font-bold text-4xl pt-9">Create Account</h1>
				<h1 className="font-semibold text-lg">Create QuizShare account</h1>
				<div className="flex flex-row flex-wrap justify-around px-12">
					<p
						className="px-7 py-1 rounded-2xl text-white font-bold cursor-pointer bg-gradient-to-r from-green-400 to-blue-400"
						onClick={() => setStep(1)}
					>
						First Step
					</p>
					<p
						className="px-7 py-1 rounded-2xl text-white font-bold cursor-pointer bg-gradient-to-r from-green-400 to-blue-400"
						onClick={() => setStep(2)}
					>
						Second Step
					</p>
				</div>
				{step === 1 ? (
					<div className="px-20 pt-4">
						<FormControl id="first-name" isRequired className="flex flex-col">
							<FormLabel>Username</FormLabel>
							<Input
								placeholder="Enter Username"
								value={username}
								isRequired
								onChange={(e) => setUsername(e.target.value)}
							/>
							<FormLabel className="pt-4 font-bold">Email</FormLabel>
							<Input
								type="email"
								value={email}
								placeholder="Enter Email"
								onChange={(e) => setEmail(e.target.value)}
							/>
							<FormButton onClick={formValidation} />
						</FormControl>
					</div>
				) : (
					<div className="px-20 pt-4">
						<FormControl id="first-name" isRequired className="flex flex-col">
							<FormLabel>password</FormLabel>
							<Input
								type="password"
								placeholder="Enter Password"
								value={password}
								isRequired
								onChange={(e) => setPassword(e.target.value)}
							/>
							<FormLabel className="pt-4 font-bold">Confirm Password</FormLabel>
							<Input
								type="password"
								placeholder="Enter Confirm Password"
								onChange={(e) => setConfirmPassword(e.target.value)}
							/>
							<FormButton onClick={formValidation} />
						</FormControl>
					</div>
				)}
			</div>
		</div>
	);
};

export default SignUp;
