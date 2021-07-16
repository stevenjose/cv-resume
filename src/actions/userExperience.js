import { types } from '../types/types';

export const userExperience = (experience) =>
{
	return {
		type: types.userExperience,
		payload: {
			experience,
		}
	}
}
