import React, { useEffect, useState } from "react";
import { About } from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificate from './components/Certificate';
import {Portafolio} from './components/Portafolio';
import { Skills } from './components/Skills';
import {CargarData} from './components/CargarData';
import img1 from './assets/img/jgla.jpeg';
import { db } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { user } from './actions/user';
import { userExperience } from './actions/userExperience';
import { userPortafolio } from './actions/userPortafolio';
import { userEducation } from './actions/userEducation';
import { userCertificate } from './actions/userCertificate';
import { userSkills } from './actions/userSkills';
import { auth } from './actions/auth';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const  App = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const [estudios, setEstudios] = useState([]);
  const [experience, setExperience] = useState([]);
  const [certificate, setCertificate] = useState([]);
  const [skills, setSkills] = useState([]);
  const [portafolio, setPortafolio] = useState([]);
  const [perfil, setPerfil] = useState([]);

  const getLinks = async () => {
    consultApi("perfil",setPerfil);
    consultApi("education", setEstudios);
    consultApi("experience",setExperience);
    consultApi("certificate",setCertificate);
    consultApi("skills",setSkills);
    consultApi("portafolio",setPortafolio);
  };

  const consultApi = (indice, setState) => {
    db.collection(indice).onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setState(docs);
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

    });
  }

  useEffect(() => {
    getLinks();
  }, []);

  const person = {
    avatar: img1,
    name: (perfil && perfil[0]) ? perfil[0].name : '',
    profession: (perfil && perfil[0]) ? perfil[0].profession : '',
    bio: (perfil && perfil[0] ) ? perfil[0].bio : '',
    email: (perfil && perfil[0]) ? perfil[0].email: '',
    address: (perfil && perfil[0]) ? perfil[0].address : '',
    social: [
      {name: 'github', url: 'https://github.com/stevenjose/'},
      {name: 'linkedin', url: 'https://www.linkedin.com/in/joselopezarias/'},
    ],
    experience,
    portafolio,
    education: estudios,
    certificate,
    skills
  };

  return (
    <Router>
       <Switch>
          <Route exact path="/cv-resume">

            <Home person={person}/>
          }
          </Route>
          <Route path="/load">
            <CargarData />
          </Route>
        </Switch>
    </Router>

  );
}

function Home({ person }) {
  const userState = useSelector((state) => state.user);
  const { perfil } = useSelector((state) => state.user);
  return (
    <header className="App">
      <div className='wrapper'>
        <div className='sidebar'>
          <About
            avatar={userState.avatar}
            name={perfil.name}
            profession={userState.perfil.profession}
            bio={userState.perfil.bio}
            address={userState.perfil.address}
            social={userState.social}
            email ={userState.perfil.email}/>
        </div>
        <div className='content-wrapper'>
            <div className='content'>
              <hr/>
              <Experience />
              <hr/>
              <Education />
              <hr/>
              <Certificate />
              <hr/>
              <Portafolio />
              <Skills skills={person.skills} />
            </div>
        </div>
      </div>
    </header>
  );
}

const Load = ()=>{
  return <h1> Hola </h1>
}
export default App;
