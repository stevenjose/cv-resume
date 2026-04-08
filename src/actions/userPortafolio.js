import { types } from '../types/types';
import cvData from '../data/cv-data.json';

export const userPortafolioFetch = () => {
	return (dispatch) => {
		dispatch(userPortafolio(cvData.projects));
	};
}

export const userPortafolio = (portafolio) => {
	return {
		type: types.userPortafolio,
		payload: {
			portafolio
		}
	}

}

