import { user } from '../../actions/user';
import { types } from '../../types/types';

const  avatar = "/cv-resume/static/media/jgla.3bfc2ac0.jpeg";
const reducerOut = {
				type: types.userBio,
        payload: {
          avatar: '/cv-resume/static/media/jgla.3bfc2ac0.jpeg',
          perfil: {
            address: 'Miranda, Venezuela.',
            bio: 'Desarrollador de Aplicaciones móviles y web  Mi experiencia: He participado en proyectos de pequeña y gran complejidad, trabajando bajo estándares de calidad. En empresas privada y en la banca. Tengo mas de 10 años de experiencia en área de desarrollo de software, participando en todas sus fases .',
            email: 'lopezajoseg@gmail.com',
            id: 'H9TbQpD3BTZD20kMDIFL',
            name: 'José Gregorio López Arias',
            profession: 'Full Stack Developer',
            tlf: '+584241596631',
            zip: '1012'
          },
          social: undefined,
          experience: undefined,
          portafolio: undefined,
          education: undefined,
          certificate: undefined,
          skills: undefined
        }
}

const person = {
	address: "Miranda, Venezuela.",
	bio: "Desarrollador de Aplicaciones móviles y web  Mi experiencia: He participado en proyectos de pequeña y gran complejidad, trabajando bajo estándares de calidad. En empresas privada y en la banca. Tengo mas de 10 años de experiencia en área de desarrollo de software, participando en todas sus fases .",
	email: "lopezajoseg@gmail.com",
	id: "H9TbQpD3BTZD20kMDIFL",
	name: "José Gregorio López Arias",
	profession: "Full Stack Developer",
	tlf: "+584241596631",
	zip: "1012"
}


describe('Pruebas en actions user', () =>{
	test('todas las acciones', ()=> {
		const userBio = user(avatar, person);
		expect( userBio ).toEqual(reducerOut)
	});

})
