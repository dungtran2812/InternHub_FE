import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import rootReducer from '../redux/rootReducer';
import internHubApi from '../services/internHubApi';

const store = configureStore({
	reducer: {
		rootReducer,
		[internHubApi.reducerPath]: internHubApi.reducer
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false
		}).concat(internHubApi.middleware)
});

const persistor = persistStore(store);

//action logout reset state

export { store, persistor };
