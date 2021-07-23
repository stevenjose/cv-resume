import { useDispatch } from 'react-redux';
import { userFetch } from '../actions/user';
import { userExperienceFetch } from '../actions/userExperience';
import { userPortafolioFetch } from '../actions/userPortafolio';
import { userEducationFetch } from '../actions/userEducation';
import { userCertificateFetch } from '../actions/userCertificate';
import { userSkillsFetch } from '../actions/userSkills';

export const UserHook = (indice) => {
  const dispatch = useDispatch();
  const buscarUser = (indice) => {
    switch (indice) {
      case 'perfil':
        dispatch(userFetch(indice));
        break;
      case 'experience':
        dispatch(userExperienceFetch(indice));
        break;
      case 'portafolio':
        dispatch(userPortafolioFetch(indice));
        break;
      case 'education':
        dispatch(userEducationFetch(indice));
        break;
      case 'certificate':
        dispatch(userCertificateFetch(indice));
        break;
      case 'skills':
        dispatch(userSkillsFetch(indice));
        break;
      default:
        return ""
    }
  }

  return {buscarUser};

};
