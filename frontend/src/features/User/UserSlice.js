import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const signupUser = createAsyncThunk(
	'users/signupUser',
	async ({ name, email, password, confirmPassword }, thunkAPI) => {
		try {
			const response = await fetch('/api/v1/user/signup', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ name, email, password, confirmPassword })
			});
			let data = await response.json;
			if (response.status === 200) {
				localStorage.setItem('token', data.token);
				return { ...data, username: name, email };
			} else {
				return thunkAPI.rejectWithValue(data);
			}
		} catch (e) {
			console.log('Error', e.response.data);
			return thunkAPI.rejectWithValue(e.response.data);
		}
	}
);

export const loginUser = createAsyncThunk('users/loginUser', async ({ email, password }, thunkAPI) => {
	console.log('email', email, 'password', password);
	console.log('Sending');
	try {
		const response = await fetch('/api/v1/user/login', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email,
				password
			})
		});
		let data = await response.json();
		console.log('response', data);
		if (response.status === 200) {
			console.log('token', data.token);
			localStorage.setItem('token', data.token);
			return data;
		} else {
			return thunkAPI.rejectWithValue(data);
		}
	} catch (e) {
		console.log('Error', e.response.data);
		thunkAPI.rejectWithValue(e.response.data);
	}
});
export const userSlice = createSlice({
	name: 'user',
	initialState: {
		username: '',
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
			state.email = payload.user.email;
			state.username = payload.user.name;
		},
		[signupUser.pending]: (state) => {
			state.isFetching = true;
		},
		[signupUser.rejected]: (state, { payload }) => {
			state.isFetching = false;
			state.isError = true;
			state.errorMessage = payload.message;
		},
		[loginUser.fulfilled]: (state, { payload }) => {
			console.log('state', state);
			state.email = payload.email;
			state.username = payload.name;
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
