import { types } from '../types/types';


// redux thunk para method async
export const startLogin = (uid, password) =>{
	return (dispatch) => {
		setTimeout(()=> {
			dispatch(auth(uid, password));
		}, 3500)
	}
}

export const auth = (uid, displayName) =>({
	type: types.login,
		payload: {
			uid,
			displayName
		}
})
