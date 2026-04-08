
import { types } from "../types/types";
import cvData from "../data/cv-data.json";
import img1 from "../assets/img/jgla.jpeg";

const initState = {
	avatar: img1,
	perfil: {
		name: cvData.personal.name,
		profession: cvData.personal.title,
		bio: cvData.personal.summary,
		address: cvData.personal.location,
		email: cvData.personal.email,
		phone: cvData.personal.phone,
	},
	social: [
		{ name: 'github', url: cvData.personal.social.github },
		{ name: 'linkedin', url: cvData.personal.social.linkedin },
	],
	experience: cvData.experience,
	portafolio: cvData.projects,
	education: cvData.education,
	certificate: cvData.certifications,
	skills: cvData.skills,
}

export const personReducer = (state = initState, action) => {
	switch (action.type) {
		case types.userBio:
			return {
				...state,
				avatar: action.payload.avatar,
				perfil: action.payload.perfil,
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
