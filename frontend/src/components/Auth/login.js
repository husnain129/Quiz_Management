import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import FormButton from './FormButton';
const Login = () => {
	const [btnError, setBtnError] = useState(true);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	var err;
	const formValidation = () => {
		if (password.length < 8) {
			return false;
		} else {
			return true;
		}
	};
	return (
		<div className="flex justify-center w-full bg-gray-100 items-center" style={{ height: '91vh' }}>
			<div className="flex flex-col space-y-3 w-1/3 h-3/4 bg-white shadow-2xl text-center ">
				<h1 className="font-bold text-4xl pt-9">Welcome Back!</h1>
				<h1 className="font-semibold text-lg">Sign in to your QuizShare account</h1>
				<div className="px-20 pt-4">
					<FormControl id="first-name" isRequired className="flex flex-col">
						<FormLabel>Username</FormLabel>
						<Input
							placeholder="Enter Username"
							value={username}
							isRequired
							onChange={(e) => setUsername(e.target.value)}
						/>
						<FormLabel className="pt-4 font-bold">Password</FormLabel>
						<Input
							type="password"
							value={password}
							placeholder="Enter Password"
							onChange={(e) => setPassword(e.target.value)}
						/>
						<FormButton onClick={formValidation} />
					</FormControl>
				</div>
			</div>
		</div>
	);
};

export default Login;
