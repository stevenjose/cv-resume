
import { types } from "../types/types";
import {
	cvAvatar,
	cvPerfil,
	cvSocial,
	cvExperience,
	cvSkills,
	cvEducation,
	cvCertificate,
	cvPortafolio,
} from "../data/cvData";

const initState = {
	avatar: cvAvatar,
	perfil: cvPerfil,
	social: cvSocial,
	experience: cvExperience,
	portafolio: cvPortafolio,
	education: cvEducation,
	certificate: cvCertificate,
	skills: cvSkills,
}

export const personReducer = (state = initState, action) => {
	switch (action.type) {
		case types.userBio:
			// Only override if Firebase returned real data
			if (!action.payload.perfil || !action.payload.perfil.name) {
				return state;
			}
			return {
				...state,
				avatar: action.payload.avatar,
				perfil: action.payload.perfil,
				social: [
					{ name: 'github',   url: 'https://github.com/stevenjose/' },
					{ name: 'linkedin', url: 'https://www.linkedin.com/in/joselopezarias/' },
				],
			};

		case types.userExperience:
			if (!action.payload.experience || action.payload.experience.length === 0) {
				return state;
			}
			return {
				...state,
				experience: action.payload.experience,
			};

		case types.userPortafolio:
			if (!action.payload.portafolio || action.payload.portafolio.length === 0) {
				return state;
			}
			return {
				...state,
				portafolio: action.payload.portafolio,
			};

		case types.userEducation:
			if (!action.payload.education || action.payload.education.length === 0) {
				return state;
			}
			return {
				...state,
				education: action.payload.education,
			};

		case types.userCertificate:
			if (!action.payload.certificate || action.payload.certificate.length === 0) {
				return state;
			}
			return {
				...state,
				certificate: action.payload.certificate,
			};

		case types.userSkills:
			if (!action.payload.skills || action.payload.skills.length === 0) {
				return state;
			}
			return {
				...state,
				skills: action.payload.skills,
			};

		default:
			return state;
	}
}
