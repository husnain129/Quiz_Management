import { configureStore } from '@reduxjs/toolkit';
import { quizSlice } from '../features/Quiz/QuizSlice';
import { userSlice } from '../features/User/UserSlice';
export default configureStore({
	reducer: {
		user: userSlice.reducer,
		quiz: quizSlice.reducer
	}
});
