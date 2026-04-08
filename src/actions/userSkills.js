import { types } from "../types/types";
import cvData from '../data/cv-data.json';

export const userSkillsFetch = () => {
	return (dispatch) => {
		dispatch(userSkills(cvData.skills));
	};
}


export const userSkills = (skills) => {
	return {
		type: types.userSkills,
		payload: {
			skills
		}
	}
}

