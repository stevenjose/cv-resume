
import { types } from "../types/types";
import cvData from "../data/cvData";

// Static CV data is used as the initial state so the app renders
// immediately without waiting for Firebase.  Firebase responses
// override individual slices only when they return non-empty arrays.
const initState = {
	avatar:      cvData.avatar,
	perfil:      cvData.perfil,
	social:      cvData.social,
	experience:  cvData.experience,
	portafolio:  cvData.portafolio,
	education:   cvData.education,
	certificate: cvData.certificate,
	skills:      cvData.skills,
	languages:   cvData.languages,
}

export const personReducer = (state = initState, action) => {
	switch (action.type) {
		case types.userBio:
			return {
				...state,
				avatar: action.payload.avatar || state.avatar,
				perfil: action.payload.perfil || state.perfil,
				social: state.social,
			}

		case types.userExperience:
			return {
				...state,
				experience: action.payload.experience && action.payload.experience.length > 0
					? action.payload.experience
					: state.experience,
			}

		case types.userPortafolio:
			return {
				...state,
				portafolio: action.payload.portafolio && action.payload.portafolio.length > 0
					? action.payload.portafolio
					: state.portafolio,
			}

		case types.userEducation:
			return {
				...state,
				education: action.payload.education && action.payload.education.length > 0
					? action.payload.education
					: state.education,
			}

		case types.userCertificate:
			return {
				...state,
				certificate: action.payload.certificate && action.payload.certificate.length > 0
					? action.payload.certificate
					: state.certificate,
			}

		case types.userSkills:
			return {
				...state,
				skills: action.payload.skills && action.payload.skills.length > 0
					? action.payload.skills
					: state.skills,
			}

		default:
			return state;
	}
}
