import React, { useState } from "react";
import Loading from "./Loading";
import { useSelector } from 'react-redux';

export const Portafolio = () => {
  const [expanded, setExpanded] = useState(true);
  const userState = useSelector((state) => state.user);

  const toggle = () => setExpanded((prev) => !prev);

  const myPortafolio = () => {
    if (!expanded) return null;
    if (!userState.portafolio || userState.portafolio.length === 0) return <Loading />;
    return <Carga portafolio={userState.portafolio} />;
  };

  return (
    <div>
      <div className="title mt-4">
        <i className="fa fa-folder-open"></i>
        <h3 className="mt-4">
          Portafolio
          <i
            className={`ver-mas fa ${expanded ? 'fa-arrow-up' : 'fa-arrow-down'}`}
            onClick={toggle}
            style={{ float: "right" }}
            aria-label={expanded ? 'Colapsar portafolio' : 'Expandir portafolio'}
          ></i>
        </h3>
        <hr />
        {myPortafolio()}
      </div>
    </div>
  );
};

const Carga = ({ portafolio }) => {
  return portafolio.map((port) => (
    <div className="item" key={port.name}>
      <div className="port-header">
        <h3>
          {port.name}
          {port.date && <span>{port.date}</span>}
        </h3>
        {port.role && (
          <p className="port-meta">
            <i className="fa fa-user" style={{ marginRight: 5 }}></i>
            {port.role}
            {port.company && (
              <span>
                <i className="fa fa-building" style={{ marginLeft: 10, marginRight: 5 }}></i>
                {port.company}
              </span>
            )}
          </p>
        )}
      </div>
      <p>{port.description}</p>
      {port.technologies && port.technologies.length > 0 && (
        <div className="exp-tech">
          {port.technologies.map((tech) => (
            <span key={tech} className="tech-badge">{tech}</span>
          ))}
        </div>
      )}
      {port.url && port.url !== '#' && (
        <a href={port.url} className="btn-outline-dark" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-external-link" style={{ marginRight: 4 }}></i>
          Ver proyecto
        </a>
      )}
    </div>
  ));
};
