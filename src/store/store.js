import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { personReducer } from '../reducers/personReducer'
import { authReducer } from '../reducers/authReducer'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;



const reducers = combineReducers({
	user: personReducer,
	auth: authReducer
});

export const store = createStore(
	reducers,
	composeEnhancers(
		applyMiddleware(thunk)
	)
	);
