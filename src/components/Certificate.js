import React, { useState }  from 'react';

const Certificate = ({certificate}) => {

  const [myCertificatesVer, setMyCertificatesVer] = useState(1);
  const [etiquetaMas, setEtiquetaMas] = useState('ver-mas fa fa-arrow-up');

  const verMas = () =>{
    if(myCertificatesVer){
      setMyCertificatesVer(0);
      setEtiquetaMas('ver-mas fa fa-arrow-up');
    }else{
      setEtiquetaMas('ver-mas fa fa-arrow-down');
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
      <h3 className="mt-4">
        Certificados
        <i className={ etiquetaMas } onClick={ verMas } style={{float: 'right'}}></i>
      </h3>
      <hr/>
        { myCertificates() }
    </div>
  )
};

export default Certificate;
