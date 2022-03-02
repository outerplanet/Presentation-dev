import { configureStore } from '@reduxjs/toolkit';
import api from './api/api';

const store = configureStore({
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware),
	reducer: {
		[api.reducerPath]: api.reducer
	}
});

export default store;
