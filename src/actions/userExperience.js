import { types } from '../types/types';
import cvData from '../data/cv-data.json';


export const userExperienceFetch = () => {
	return (dispatch) => {
		dispatch(userExperience(cvData.experience));
	};
}

export const userExperience = (experience) =>
{
	return {
		type: types.userExperience,
		payload: {
			experience,
		}
	}
}

