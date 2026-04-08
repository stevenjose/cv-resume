import { types } from "../types/types";
import img1 from "../assets/img/jgla.jpeg";
import cvData from "../data/cv-data.json";

export const userFetch = () => {
  return (dispatch) => {
    const { personal } = cvData;
    const perfil = {
      name: personal.name,
      profession: personal.title,
      bio: personal.summary,
      address: personal.location,
      email: personal.email,
      phone: personal.phone,
    };
    dispatch(user(img1, perfil));
  };
};

export const loadUser = async () => {
  const { personal } = cvData;
  return [{
    name: personal.name,
    profession: personal.title,
    bio: personal.summary,
    address: personal.location,
    email: personal.email,
    phone: personal.phone,
  }];
};

export const user = (avatar, perfil) => ({
  type: types.userBio,
  payload: {
    avatar,
    perfil,
  },
});
