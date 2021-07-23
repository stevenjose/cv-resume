import { types } from "../types/types"
import { db } from '../firebase';

// redux thunk para method async
export const userSkillsFetch = (indice) =>{
	return (dispatch) => {
		const docs = [];
		db.collection(indice).onSnapshot((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});
				dispatch(userSkills(docs));
		})
	}
}


export const userSkills = (skills) => {
	return {
		type: types.userSkills,
		payload: {
			skills
		}
	}
}
