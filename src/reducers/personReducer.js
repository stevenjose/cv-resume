
import { types } from "../types/types";

const initState = {
	avatar: '',
	perfil: '',
	social: [],
	experience: '',
	portafolio: '',
	education: '',
	certificate: '',
	skills: ''
}

export const personReducer = (state = initState, action) => {
	switch (action.type) {
		case types.userBio:
			return {
				avatar: action.payload.avatar,
				perfil: action.payload.perfil,
			    social: [
			      {name: 'github', url: 'https://github.com/stevenjose/'},
			      {name: 'linkedin', url: 'https://www.linkedin.com/in/joselopezarias/'},
			    ]
			}

		case types.userExperience:

			return 	{
					   ...state,
					   experience: action.payload.experience
					}

		case types.userPortafolio:

			return 	{
					   ...state,
					   portafolio: action.payload.portafolio
					}

		case types.userEducation:

			return 	{
					   ...state,
					   education: action.payload.education
					}

		case types.userCertificate:

			return 	{
					   ...state,
					   certificate: action.payload.certificate
					}
		case types.userSkills:

			return 	{
					   ...state,
					   skills: action.payload.skills
					}
		default:
			return state;
			break;
	}
}
