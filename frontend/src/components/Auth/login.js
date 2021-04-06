import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { clearState, loginUser, userSelector } from '../../features/User/UserSlice';
import FormButton from './FormButton';
const Login = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const { isSuccess, isError, errorMessage } = useSelector(userSelector);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm();
	const onSubmit = (data) => {
		console.log('login Data', data);
		dispatch(loginUser(data));
	};

	useEffect(() => {
		return () => {
			dispatch(clearState());
		};
	}, []);

	useEffect(() => {
		if (isSuccess) {
			dispatch(clearState());
			history.push('/');
		}

		if (isError) {
			dispatch(clearState());
		}
	}, [isSuccess, isError]);

	return (
		<div className="flex justify-center w-full bg-gray-100 items-center" style={{ height: '91vh' }}>
			<div className="flex flex-col space-y-3 w-1/3 h-3/4 bg-white shadow-2xl text-center ">
				<h1 className="font-bold text-4xl pt-9">Welcome Back!</h1>
				<h1 className="font-semibold text-lg">Sign in to your QuizShare account</h1>
				<div className="px-20 pt-4">
					<form onSubmit={handleSubmit(onSubmit)}>
						<FormControl isRequired className="flex flex-col">
							<FormLabel>Username</FormLabel>
							<Input
								type="email"
								placeholder="Enter Email"
								isRequired
								{...register('email', { required: true })}
							/>
							<FormLabel className="pt-4 font-bold">Password</FormLabel>
							<Input
								type="password"
								placeholder="Enter Password"
								{...register('password', { required: true, maxLength: 20 })}
							/>
							<FormButton title="Login" />
						</FormControl>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
