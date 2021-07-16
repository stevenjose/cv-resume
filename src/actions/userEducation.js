import { types } from '../types/types';

export const userEducation = (education) => {
	return{
		type: types.userEducation,
		payload: {
			education
		}
	}

}