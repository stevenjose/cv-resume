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

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const  App = () => {
  const [estudios, setEstudios] = useState([]);
  const [experience, setExperience] = useState([]);
  const [certificate, setCertificate] = useState([]);
  const [skills, setSkills] = useState([]);
  const [portafolio, setPortafolio] = useState([]);
  const [perfil, setPerfil] = useState([]);

  const getLinks = async () => {
    consultApi("education", setEstudios);
    consultApi("experience",setExperience);
    consultApi("certificate",setCertificate);
    consultApi("skills",setSkills);
    consultApi("portafolio",setPortafolio);
    consultApi("perfil",setPerfil);
  };

  const consultApi = (indice, setState) => {
    db.collection(indice).onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setState(docs);
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
          </Route>
          <Route path="/load">
            <CargarData />
          </Route>
        </Switch>
    </Router>

  );
}

function Home({ person }) {
  return (
    <header className="App">
      <div className='wrapper'>
        <div className='sidebar'>
          <About
            avatar={person.avatar}
            name={person.name}
            profession={person.profession}
            bio={person.bio}
            address={person.address}
            social={person.social}
            email ={person.email}/>
        </div>
        <div className='content-wrapper'>
            <div className='content'>
              <hr/>
              <Experience experience={person.experience} />
              <hr/>
              <Education education={person.education} />
              <hr/>
              <Certificate certificate={person.certificate} />
              <hr/>
              <Portafolio portafolio={person.portafolio}/>
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
