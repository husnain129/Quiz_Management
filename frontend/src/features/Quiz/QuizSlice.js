import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
	quiz: [],
	status: 'idle',
	error: null
};

export const fetchAllQuiz = createAsyncThunk('quiz/fetchAllQuiz', async (thunkAPI) => {
	try {
		const response = await fetch('/api/v1/quiz', {
			method: 'GET'
		});
		let data = await response.json();
		console.log('quiz data', data.data);
		return data;
	} catch (e) {
		console.log('Error', e.response.data);
		return thunkAPI.rejectWithValue(e.response.data);
	}
});

export const quizSlice = createSlice({
	name: 'quiz',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchAllQuiz.fulfilled]: (state, { payload }) => {
			state.status = 'succedded';
			state.quiz = state.quiz.concat(payload);
		},
		[fetchAllQuiz.pending]: (state) => {
			state.status = 'pending';
		},
		[fetchAllQuiz.rejected]: (state, { payload }) => {
			state.status = 'rejected';
			console.log('rejected', payload);
		}
	}
});

export const { getAllQuiz } = quizSlice.actions;
export const selectAllQuiz = (state) => state.quiz;
