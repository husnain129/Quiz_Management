import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { clearState, signupUser, userSelector } from '../../features/User/UserSlice';
import FormButton from './FormButton';
const SignUp = () => {
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
		console.log('sign Up data', data);
		dispatch(signupUser(data));
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
		<div className="flex justify-center w-full bg-gray-100 items-center" style={{ height: '90vh' }}>
			<div className="flex flex-col w-2/4 h-9/12 bg-white shadow-2xl text-center ">
				<h1 className="font-bold text-4xl pt-9">Welcome Back!</h1>
				<h1 className="font-semibold text-lg">Sign Up to your QuizShare account</h1>
				<div className="px-20 pt-4">
					<form onSubmit={handleSubmit(onSubmit)}>
						<FormControl isRequired className="flex flex-col pb-4">
							<FormLabel>Name</FormLabel>
							<Input
								placeholder="Enter Username"
								isRequired
								{...register('name', { required: true, maxLength: 20 })}
							/>
							<FormLabel className="pt-4 font-bold">Email</FormLabel>
							<Input
								type="email"
								placeholder="Enter Password"
								{...register('email', { required: true, maxLength: 20 })}
							/>
							<FormLabel className="pt-4 font-bold">Password</FormLabel>
							<Input
								type="password"
								placeholder="Enter Password"
								{...register('password', { required: true, maxLength: 20 })}
							/>
							<FormLabel className="pt-4 font-bold">Confirm Password</FormLabel>
							<Input
								type="password"
								placeholder="Confirm Password"
								{...register('confirmPassword', { required: true, maxLength: 20 })}
							/>
							<FormButton title="Register" />
						</FormControl>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
