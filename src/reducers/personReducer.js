
import { types } from "../types/types";
import cvData from "../data/cv-data.json";

const initState = {
	avatar: '',
	perfil: {
		name: cvData.personal.name,
		profession: cvData.personal.title,
		bio: cvData.personal.summary,
		address: cvData.personal.location,
		email: cvData.personal.email,
	},
	social: [],
	experience: cvData.experience,
	portafolio: cvData.portafolio,
	education: cvData.education,
	certificate: cvData.certificate,
	skills: cvData.skills
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
