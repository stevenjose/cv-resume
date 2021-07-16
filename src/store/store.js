import { createStore, combineReducers } from 'redux';
import { personReducer } from '../reducers/personReducer'
import { authReducer } from '../reducers/authReducer'

const reducers = combineReducers({
	user: personReducer,
	auth: authReducer
});

export const store = createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);