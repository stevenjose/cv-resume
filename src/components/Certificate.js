import React, { useState }  from 'react';

const Certificate = ({certificate}) => {

  const [myCertificatesVer, setMyCertificatesVer] = useState(1);
  const [etiquetaMas, setEtiquetaMas] = useState('Ver Menos -');

  const verMas = () =>{
    if(myCertificatesVer){
      setMyCertificatesVer(0);
      setEtiquetaMas('Ver Mas +');
    }else{
      setEtiquetaMas('Ver Menos -');
      setMyCertificatesVer(1);
    }
  }
  const myCertificates = () => {
    if(myCertificatesVer){
      return(
        <div>
          {certificate.map((cert) =>
            <div className='item' key={cert.name}>
              <h3>{cert.name} @ {cert.institution} <span>{cert.date}</span></h3>
              <p>{cert.description}</p>
            </div>
          )}
        </div>
      );
    }

  }


  return (
    <div className='title mt-4'>
      <i className='fa fa-trophy'></i>
      <h2 className="mt-4">
        CERTIFICATES
        <button className="ver-mas btn btn-primary" onClick={ verMas }>
            { etiquetaMas }
        </button>
      </h2>
        { myCertificates() }
    </div>
  )
};

export default Certificate;
