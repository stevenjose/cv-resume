import React, { useEffect } from "react";
import { About } from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificate from './components/Certificate';
import {Portafolio} from './components/Portafolio';
import { Skills } from './components/Skills';
import {CargarData} from './components/CargarData';
import { useSelector } from 'react-redux';
import { UserHook }   from './hooks/UserHook';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const  App = () => {

  const userState = useSelector((state) => state.user);
  const { buscarUser } = UserHook("");
  const getLinks = async () => {
    await buscarUser("perfil");
    await buscarUser("education");
    await buscarUser("experience");
    await buscarUser("certificate");
    await buscarUser("skills");
    await buscarUser("portafolio");
  };

  useEffect(() => {
    getLinks();
  }, []);

  return (
    <Router>
       <Switch>
          <Route exact path="/cv-resume">
            <Home person={userState}/>
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
export default App;
