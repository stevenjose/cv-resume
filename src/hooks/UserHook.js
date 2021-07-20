import img1 from '../assets/img/jgla.jpeg';
import { db } from '../firebase';
import { useDispatch } from 'react-redux';
import { user } from '../actions/user';
import { userExperience } from '../actions/userExperience';
import { userPortafolio } from '../actions/userPortafolio';
import { userEducation } from '../actions/userEducation';
import { userCertificate } from '../actions/userCertificate';
import { userSkills } from '../actions/userSkills';
import React, { useState } from "react";

const UserHook = (indice) => {
  const dispatch = useDispatch();
  const [dataFetch, setDataFetch] = useState([]);
  const buscarUser = (indice) => {
    const docs = [];
    if(indice){
      db.collection(indice).onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
          setDataFetch({...dataFetch, docs});
        });

        if(indice === 'perfil'){
          dispatch(user(img1,docs[0]));
        }
        if (indice === 'experience') {
          dispatch(userExperience(docs));
        }
        if (indice === 'portafolio') {
          dispatch(userPortafolio(docs));
        }
        if (indice === 'education') {
          dispatch(userEducation(docs));
        }
        if (indice === 'certificate') {
          dispatch(userCertificate(docs));
        }
        if (indice === 'skills') {
          dispatch(userSkills(docs));
        }

      })
    }

  }

return {buscarUser, dataFetch};

};

export default UserHook;
