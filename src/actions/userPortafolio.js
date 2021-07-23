import { types } from '../types/types';
import { db } from '../firebase';

// redux thunk para method async
export const userPortafolioFetch = (indice) =>{
	return (dispatch) => {
		const docs = [];
		db.collection(indice).onSnapshot((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});
				dispatch(userPortafolio(docs));
		})
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
