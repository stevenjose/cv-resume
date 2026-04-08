import React, { useState } from "react";
import Loading from "./Loading";
import { useSelector } from 'react-redux';

export const Portafolio = () => {
  const [myPortafolioVer, setPortafolioVer] = useState(1);
  const [etiquetaMas, setEtiquetaMas] = useState("ver-mas fa fa-arrow-up");
  const userState = useSelector((state) => state.user);

  const verMas = () => {
    if (myPortafolioVer) {
      setPortafolioVer(0);
      setEtiquetaMas("ver-mas fa fa-arrow-up");
    } else {
      setEtiquetaMas("ver-mas fa fa-arrow-down");
      setPortafolioVer(1);
    }
  };

  const myProjects = () => {
    if (myPortafolioVer) {
      return (
        <div>
          {userState.portafolio && userState.portafolio.length > 0
            ? Carga(userState.portafolio)
            : <Loading />}
        </div>
      );
    }
  };

  const Carga = (portafolio) => {
    return portafolio.map((port) => (
      <div className="item" key={port.id || port.name}>
        <h3>
          {port.name}
          {port.date && <span>{port.date}</span>}
        </h3>
        {port.company && (
          <p style={{ fontSize: '.8rem', color: 'var(--primary)', marginBottom: '6px', fontWeight: 500 }}>
            <i className="fa fa-building-o" style={{ marginRight: 6 }}></i>{port.company}
          </p>
        )}
        <p>{port.description}</p>
        {port.technologies && port.technologies.length > 0 && (
          <div className="tech-badges">
            {port.technologies.map((tech) => (
              <span className="tech-badge" key={tech}>{tech}</span>
            ))}
          </div>
        )}
        {port.url && (
          <a href={port.url} className="btn btn-outline-dark" target="_blank" rel="noopener noreferrer">
            Ver proyecto
          </a>
        )}
      </div>
    ));
  };

  return (
    <div>
      <div className="title mt-4">
        <i className="fa fa-folder-open"></i>
        <h3 className="mt-4">
          Proyectos Destacados
          <i className={etiquetaMas} onClick={verMas} style={{ float: "right" }}></i>
        </h3>
        <hr />
        {myProjects()}
      </div>
    </div>
  );
};

