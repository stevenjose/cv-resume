import { types } from '../types/types';
import { db } from '../firebase';


// redux thunk para method async
export const userExperienceFetch = (indice) =>{
	return (dispatch) => {
		const docs = [];
		db.collection(indice).onSnapshot((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});
				dispatch(userExperience(docs));
		})
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
