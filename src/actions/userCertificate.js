import { types } from "../types/types";
import cvData from '../data/cv-data.json';

export const userCertificateFetch = () => {
	return (dispatch) => {
		dispatch(userCertificate(cvData.certifications));
	};
}

export const userCertificate = (certificate) => {
	return {
		type: types.userCertificate,
		payload: {
			certificate
		}
	}
}

