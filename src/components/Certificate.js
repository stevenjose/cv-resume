import React, { useState }  from 'react';
import Loading from './Loading';
import { useSelector } from 'react-redux';

const Certificate = () => {

  const [myCertificatesVer, setMyCertificatesVer] = useState(1);
  const [etiquetaMas, setEtiquetaMas] = useState('ver-mas fa fa-arrow-up');
  const userState = useSelector((state) => state.user);

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
          { userState.certificate && userState.certificate.length > 0 ? (Carga(userState.certificate)) : <Loading /> }
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

const Carga = (certificate)=> {

      return (certificate.map((cert) =>{
             return <div className='item' key={cert.id}>
                <h3>{cert.name} @ {cert.institution} <span>{cert.date}</span></h3>
                <p>{cert.description}</p>
                <a href={ cert.url } className="btn btn-outline-dark" target="_blank"> Ver certificado </a>
            </div>
          })
      )
}


export default Certificate;
