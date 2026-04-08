import { types } from '../types/types';
import cvData from '../data/cv-data.json';

// redux thunk para method async
export const userPortafolioFetch = (indice) =>{
	return (dispatch) => {
		dispatch(userPortafolio(cvData.portafolio));
	}
}

export const userPortafolio = (portafolio) => {
	return {
		type: types.userPortafolio,
		payload: {
			portafolio
		}
	}

}
