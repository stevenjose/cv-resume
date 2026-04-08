import { types } from '../types/types';
import cvData from '../data/cv-data.json';


// redux thunk para method async
export const userExperienceFetch = (indice) =>{
	return (dispatch) => {
		dispatch(userExperience(cvData.experience));
	}
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
