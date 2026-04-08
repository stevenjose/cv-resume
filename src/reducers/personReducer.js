
import { types } from "../types/types";

const initState = {
	avatar: '',
	perfil: {
		name: 'Steven Jose',
		profession: 'Desarrollador de Software',
		bio: 'Desarrollador de Software con más de 3 años de experiencia en Mecalux (Barcelona, España). Especializado en Java, Spring Boot, Angular y buenas prácticas de desarrollo (Clean Code, SOLID). Experiencia en integración con Alfresco ECM, mensajería con RabbitMQ, monitoreo con Kibana y contenedores Docker. Apasionado por el testing de calidad incluyendo Mutation Testing con PIT.',
		address: 'Barcelona, España',
		email: 'lopezajoseg@gmail.com',
		tlf: '',
		zip: ''
	},
	social: [
		{ name: 'github', url: 'https://github.com/stevenjose/' },
		{ name: 'linkedin', url: 'https://www.linkedin.com/in/joselopezarias/' },
	],
	experience: [
		{
			id: 'mecalux-2022',
			jobTitle: 'Desarrollador de Software',
			company: 'Mecalux',
			location: 'Barcelona, España',
			startDate: 'Junio 2022',
			endDate: 'Presente',
			jobDescription: 'Desarrollo de soluciones empresariales con Java y Spring Boot siguiendo principios de Clean Code y SOLID. Implementación de microservicios con RabbitMQ, integración con Alfresco ECM para gestión documental, monitoreo con Kibana (ELK Stack) y contenedores Docker. Desarrollo frontend con Angular y TypeScript.',
			web: 'https://www.mecalux.es',
			technologies: ['Java', 'Spring Boot', 'Angular', 'Docker', 'RabbitMQ', 'Kibana', 'Alfresco', 'TypeScript', 'RxJS']
		}
	],
	portafolio: [],
	education: [],
	certificate: [],
	skills: [
		{ name: 'Java / Spring Boot', percentage: '90%' },
		{ name: 'Angular / TypeScript', percentage: '85%' },
		{ name: 'Docker', percentage: '80%' },
		{ name: 'RabbitMQ', percentage: '75%' },
		{ name: 'Kibana / ELK Stack', percentage: '75%' },
		{ name: 'Alfresco ECM', percentage: '70%' },
		{ name: 'Mutation Testing (PIT)', percentage: '80%' },
		{ name: 'Clean Code / SOLID', percentage: '90%' },
		{ name: 'Git / CI/CD', percentage: '85%' },
		{ name: 'RxJS', percentage: '75%' },
	]
}

export const personReducer = (state = initState, action) => {
	switch (action.type) {
		case types.userBio:
			return {
				...state,
				avatar: action.payload.avatar,
				perfil: action.payload.perfil,
			    social: [
			      { name: 'github', url: 'https://github.com/stevenjose/' },
			      { name: 'linkedin', url: 'https://www.linkedin.com/in/joselopezarias/' },
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
	}
}
