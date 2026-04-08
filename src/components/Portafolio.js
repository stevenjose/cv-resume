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

  return (
    <div>
      <div className="title mt-4">
        <i className="fa fa-folder-open"></i>
        <h3 className="mt-4">
          Proyectos
          <i className={etiquetaMas} onClick={verMas} style={{ float: "right" }}></i>
        </h3>
        <hr />
        {myPortafolioVer ? (
          <div>
            {userState.portafolio && userState.portafolio.length > 0
              ? userState.portafolio.map((port) => <ProjectCard key={port.id} port={port} />)
              : <Loading />
            }
          </div>
        ) : null}
      </div>
    </div>
  );
};

const ProjectCard = ({ port }) => {
  const startYear = port.startDate ? port.startDate.substring(0, 7).replace('-', '/') : '';
  const endYear = port.endDate ? port.endDate.substring(0, 7).replace('-', '/') : '';

  return (
    <div className="item project-card">
      <div className="project-header">
        <h3>{port.title}</h3>
        {(startYear || endYear) && (
          <span>{startYear}{endYear ? ` – ${endYear}` : ''}</span>
        )}
      </div>
      <div className="project-meta">
        {port.company && <span><i className="fa fa-building"></i> {port.company}</span>}
        {port.role && <span><i className="fa fa-user"></i> {port.role}</span>}
      </div>
      <p>{port.description}</p>
      {port.highlights && port.highlights.length > 0 && (
        <ul className="highlights">
          {port.highlights.map((h, i) => <li key={i}>{h}</li>)}
        </ul>
      )}
      {port.technologies && port.technologies.length > 0 && (
        <div className="tech-tags">
          {port.technologies.map((tech) => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>
      )}
      {port.link && (
        <a href={port.link} className="btn btn-outline-dark" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-external-link"></i> Ver proyecto
        </a>
      )}
    </div>
  );
};

