import { types } from '../types/types';
import cvData from '../data/cv-data.json';

export const userEducationFetch = () => {
	return (dispatch) => {
		dispatch(userEducation(cvData.education));
	};
}


export const userEducation = (education) => {
	return{
		type: types.userEducation,
		payload: {
			education
		}
	}

}

