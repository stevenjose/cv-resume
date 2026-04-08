import { types } from "../types/types";
import cvData from "../data/cv-data.json";
import img1 from "../assets/img/jgla.jpeg";

// redux thunk para method async
export const userFetch = (indice) => {
  return (dispatch) => {
    const docs = loadUser(indice);
    dispatch(user(img1, docs[0]));
  };
};

export const loadUser = (indice) => {
  const perfil = {
    name: cvData.personal.name,
    profession: cvData.personal.title,
    bio: cvData.personal.summary,
    address: cvData.personal.location,
    email: cvData.personal.email,
  };
  return [perfil];
};

export const user = (avatar, perfil) => ({
  type: types.userBio,
  payload: {
    avatar,
    perfil,
  },
});
