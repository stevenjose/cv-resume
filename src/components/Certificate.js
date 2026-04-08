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
      <i className='fa fa-certificate'></i>
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
                <h3>
                  {cert.title}
                  {cert.issueDate && <span>{cert.issueDate}</span>}
                </h3>
                <p><i className='fa fa-building'></i> {cert.issuer}</p>
                {cert.link
                  ? <a href={cert.link} className="btn btn-outline-dark" target="_blank" rel="noopener noreferrer">
                      <i className='fa fa-external-link'></i> Ver certificado
                    </a>
                  : null
                }
            </div>
          })
      )
}


export default Certificate;

