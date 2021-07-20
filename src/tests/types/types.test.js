import { types } from "../../types/types";

describe('Pruebas con nuestros types', () => {
	test('types', ()=>{
		expect( types ).toEqual({
				userBio:  '[User] bio',
				userExperience: '[User] exp',
				userPortafolio: '[User] portafolio',
				userEducation: '[User] education',
				userCertificate: '[User] certificate',
				userSkills: '[User] skill',
				login: '[Login] auth'
		})
	})
});