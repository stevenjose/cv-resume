
import { types } from "../types/types";
import { cvPerfil, cvExperience, cvSkills, cvPortafolio, cvEducation, cvCertificate } from "../data/cvData";

const initState = {
	avatar: '',
	perfil: cvPerfil,
	social: [
		{ name: 'github', url: 'https://github.com/stevenjose/' },
		{ name: 'linkedin', url: 'https://www.linkedin.com/in/joselopezarias/' },
	],
	experience: cvExperience,
	portafolio: cvPortafolio,
	education: cvEducation,
	certificate: cvCertificate,
	skills: cvSkills,
}

export const personReducer = (state = initState, action) => {
	switch (action.type) {
		case types.userBio:
			return {
				...state,
				avatar: action.payload.avatar,
				perfil: action.payload.perfil || state.perfil,
			    social: [
			      {name: 'github', url: 'https://github.com/stevenjose/'},
			      {name: 'linkedin', url: 'https://www.linkedin.com/in/joselopezarias/'},
			    ]
			}

		case types.userExperience:

			return 	{
					   ...state,
					   experience: action.payload.experience && action.payload.experience.length > 0
					     ? action.payload.experience
					     : state.experience,
					}

		case types.userPortafolio:

			return 	{
					   ...state,
					   portafolio: action.payload.portafolio && action.payload.portafolio.length > 0
					     ? action.payload.portafolio
					     : state.portafolio,
					}

		case types.userEducation:

			return 	{
					   ...state,
					   education: action.payload.education && action.payload.education.length > 0
					     ? action.payload.education
					     : state.education,
					}

		case types.userCertificate:

			return 	{
					   ...state,
					   certificate: action.payload.certificate && action.payload.certificate.length > 0
					     ? action.payload.certificate
					     : state.certificate,
					}
		case types.userSkills:

			return 	{
					   ...state,
					   skills: action.payload.skills && action.payload.skills.length > 0
					     ? action.payload.skills
					     : state.skills,
					}
		default:
			return state;
			break;
	}
}
