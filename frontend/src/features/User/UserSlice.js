import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const signupUser = createAsyncThunk(
	'users/signupUser',
	async ({ name, email, password, confirmPassword }, thunkAPI) => {
		try {
			const res = await axios({
				method: 'POST',
				url: 'http://localhost:3001/api/v1/user/signup',
				data: JSON.stringify({
					name,
					email,
					password,
					confirmPassword
				})
			});
			console.log(res);
		} catch (error) {
			console.log(error);
		}
	}
);

export const loginUser = createAsyncThunk('users/loginUser', async ({ email, password }, thunkAPI) => {
	console.log('email', email, 'password', password);
	try {
		const response = await axios({
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			url: 'http://localhost:3001/api/v1/user/login',
			data: JSON.stringify({
				email,
				password
			})
		});
		console.log(response);
	} catch (error) {
		console.log(error);
	}
});
export const userSlice = createSlice({
	name: 'user',
	initialState: {
		name: '',
		email: '',
		isFetching: false,
		isSuccess: false,
		isError: false,
		errorMessage: ''
	},
	reducers: {
		clearState: (state) => {
			state.isFetching = false;
			state.isSuccess = false;
			state.isError = false;
			return state;
		}
	},
	extraReducers: {
		[signupUser.fulfilled]: (state, { payload }) => {
			console.log('payload', payload);
			state.isFetching = false;
			state.isSuccess = true;
		},
		[signupUser.pending]: (state) => {
			state.isFetching = true;
		},
		[signupUser.rejected]: (state, { payload }) => {
			state.isFetching = false;
			state.isError = true;
			state.errorMessage = payload.message;
		},
		[loginUser.fulfilled]: (state) => {
			state.isFetching = false;
			state.isSuccess = true;
			return state;
		},
		[loginUser.pending]: (state) => {
			state.isFetching = true;
		},
		[loginUser.rejected]: (state, { payload }) => {
			console.log('payload', payload);
			state.isFetching = false;
			state.isError = true;
			state.errorMessage = payload.message;
		}
	}
});

export const { clearState } = userSlice.actions;
export const userSelector = (state) => state.user;
