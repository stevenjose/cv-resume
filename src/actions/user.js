import { types } from '../types/types';

export const user = (avatar,perfil,social,experience,portafolio,education,
					certificate,skills) =>
{
	return {
		type: types.userBio,
		payload: {
			avatar,
			perfil,
			social,
			experience,
			portafolio,
			education,
			certificate,
			skills
		}
	}
}
