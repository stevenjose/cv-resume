import { types } from '../types/types';

export const auth = (uid, displayName) =>({
	type: types.login,
		payload: {
			uid,
			displayName
		}
})
