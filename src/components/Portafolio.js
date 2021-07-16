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
  const myProtafolio = () => {
    if (myPortafolioVer) {
      return (
        <div>{userState.portafolio && userState.portafolio.length > 0 ? Carga(userState.portafolio) : <Loading />}</div>
      );
    }
  };

  const Carga = (portafolio) => {
    return portafolio.map((port) => {
      return (
        <div className="item" key={port.name}>
          <h3>
            {port.name} <span>{port.date}</span>
          </h3>
          <p>{port.description}</p>
          <a href={port.url} className="btn btn-outline-dark" target="_blank">
            Ver proyecto
          </a>
        </div>
      );
    });
  };
  return (
    <div>
      <div className="title mt-4">
        <i className="fa fa-trophy"></i>
        <h3 className="mt-4">
          Portafolio
          <i
            className={etiquetaMas}
            onClick={verMas}
            style={{ float: "right" }}
          ></i>
        </h3>
        <hr />
        {myProtafolio()}
      </div>
    </div>
  );
};
