import { types } from '../types/types';
import cvData from '../data/cv-data.json';

// redux thunk para method async
export const userEducationFetch = (indice) =>{
	return (dispatch) => {
		dispatch(userEducation(cvData.education));
	}
}


export const userEducation = (education) => {
	return{
		type: types.userEducation,
		payload: {
			education
		}
	}

}
