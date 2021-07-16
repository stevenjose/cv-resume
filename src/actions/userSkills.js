import { types } from "../types/types"

export const userSkills = (skills) => {
	return {
		type: types.userSkills,
		payload: {
			skills
		}
	}
}