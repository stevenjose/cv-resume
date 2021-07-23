import { types } from "../types/types";
import { db } from '../firebase';

// redux thunk para method async
export const userCertificateFetch = (indice) =>{
	return (dispatch) => {
		const docs = [];
		db.collection(indice).onSnapshot((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});
				dispatch(userCertificate(docs));
		})
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
