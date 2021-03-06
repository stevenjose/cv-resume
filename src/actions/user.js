import { types } from "../types/types";
import { db } from "../firebase";
import img1 from "../assets/img/jgla.jpeg";

// redux thunk para method async
export const userFetch = (indice) => {
  return async (dispatch) => {
    const docs = await loadUser(indice);
    dispatch(user(img1, docs[0]));
  };
};

export const loadUser = async (indice) => {
  try {
    const userSnap = await db.collection(indice).get();
    const docs = [];
    userSnap.forEach((doc) => {
      docs.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    return docs;
  } catch (error) {
    return [];
  }
};

export const user = (avatar, perfil) => ({
  type: types.userBio,
  payload: {
    avatar,
    perfil,
  },
});
