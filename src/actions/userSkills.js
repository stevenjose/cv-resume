import { types } from "../types/types"
import cvData from '../data/cv-data.json';

// redux thunk para method async
export const userSkillsFetch = (indice) =>{
	return (dispatch) => {
		dispatch(userSkills(cvData.skills));
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
