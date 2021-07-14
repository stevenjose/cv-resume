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

  const getLinks = async () => {
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
    });
  }

  useEffect(() => {
    getLinks();

  }, []);

  const person = {
    avatar: img1,
    name: 'José Gregorio López Arias',
    profession: 'Full Stack Developer',
    bio: 'Desarrollador de Aplicaciones móviles y web Mi experiencia: '+
        'He participado en proyectos pequeños, medianos y grandes, bajo estándares de calidad.' +
        'Con más de 9 años de experiencia en área de desarrollo de software, '+
        'participando en todas sus fases del desarrollo de aplicaciones web y moviles con Angular, Ionic, Vue, NodeJs,'+
        'Java, Laravel, Lumen, Symfony, ReactJs, Elastic Search, Metodologías: Scrum.',
    email:'lopezajoseg@gmail.com',
    address: 'Miranda, Venezuela.',
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
