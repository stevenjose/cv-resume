import { types } from '../types/types';

export const userPortafolio = (portafolio) => {
	return {
		type: types.userPortafolio,
		payload: {
			portafolio
		}
	}

}