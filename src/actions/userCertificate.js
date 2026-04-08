import { types } from "../types/types";
import cvData from '../data/cv-data.json';

// redux thunk para method async
export const userCertificateFetch = (indice) =>{
	return (dispatch) => {
		dispatch(userCertificate(cvData.certificate));
	}
}

export const userCertificate = (certificate) => {
	return {
		type: types.userCertificate,
		payload: {
			certificate
		}
	}
}
