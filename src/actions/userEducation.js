import { types } from '../types/types';
import { db } from '../firebase';

// redux thunk para method async
export const userEducationFetch = (indice) =>{
	return (dispatch) => {
		const docs = [];
		db.collection(indice).onSnapshot((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});
				dispatch(userEducation(docs));
		})
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
