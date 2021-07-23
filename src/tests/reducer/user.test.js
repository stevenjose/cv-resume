import {personReducer} from '../../reducers/personReducer';
import { types } from "../../types/types";

describe('Pruebas en actions user', () =>{
test('reducers', () => {
  let state;
  let type = types.userBio;
  state = personReducer({
                      user:{
                        avatar:'/cv-resume/static/media/jgla.3bfc2ac0.jpeg',
                        perfil:{id:'H9TbQpD3BTZD20kMDIFL',zip:'1012',tlf:'+584241596631',email:'lopezajoseg@gmail.com',address:'Miranda, Venezuela.',bio:'Desarrollador de Aplicaciones móviles y web  Mi experiencia: He participado en proyectos de pequeña y gran complejidad, trabajando bajo estándares de calidad. En empresas privada y en la banca. Tengo mas de 10 años de experiencia en área de desarrollo de software, participando en todas sus fases .',profession:'Full Stack Developer',name:'José Gregorio López Arias'},
                        social:[]
                      }}, type);

  expect(state).toEqual({
        user: {
          avatar: '/cv-resume/static/media/jgla.3bfc2ac0.jpeg',
          perfil: {
            id: 'H9TbQpD3BTZD20kMDIFL',
            zip: '1012',
            tlf: '+584241596631',
            email: 'lopezajoseg@gmail.com',
            address: 'Miranda, Venezuela.',
            bio: 'Desarrollador de Aplicaciones móviles y web  Mi experiencia: He participado en proyectos de pequeña y gran complejidad, trabajando bajo estándares de calidad. En empresas privada y en la banca. Tengo mas de 10 años de experiencia en área de desarrollo de software, participando en todas sus fases .',
            profession: 'Full Stack Developer',
            name: 'José Gregorio López Arias'
          },
          social: []
        }
      }
    )
  });// Test reducer userBio

  describe('test default',()=> {
    test('opcion default', ()=> {
      let state;
      let type = 'No existe';
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

      state = personReducer(initState, type);
  
  })// end test
  })
})
