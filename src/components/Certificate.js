import React, { useState } from 'react';
import Loading from './Loading';
import { useSelector } from 'react-redux';

const Certificate = () => {
  const [expanded, setExpanded] = useState(true);
  const userState = useSelector((state) => state.user);

  const toggle = () => setExpanded((prev) => !prev);

  const myCertificates = () => {
    if (!expanded) return null;
    if (!userState.certificate || userState.certificate.length === 0) return <Loading />;
    return <Carga certificate={userState.certificate} />;
  };

  return (
    <div className='title mt-4'>
      <i className='fa fa-trophy'></i>
      <h3 className='mt-4'>
        Certificados
        <i
          className={`ver-mas fa ${expanded ? 'fa-arrow-up' : 'fa-arrow-down'}`}
          onClick={toggle}
          style={{ float: 'right' }}
          aria-label={expanded ? 'Colapsar certificados' : 'Expandir certificados'}
        ></i>
      </h3>
      <hr />
      {myCertificates()}
    </div>
  );
};

const Carga = ({ certificate }) => {
  return certificate.map((cert) => (
    <div className='item' key={cert.id}>
      <h3>
        {cert.name}
        {cert.institution && <> @ {cert.institution}</>}
        {cert.date && <span>{cert.date}</span>}
      </h3>
      {cert.description && <p>{cert.description}</p>}
      {cert.url && cert.url !== '#' && (
        <a
          href={cert.url}
          className='btn-outline-dark'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fa fa-certificate' style={{ marginRight: 4 }}></i>
          Ver certificado
        </a>
      )}
    </div>
  ));
};

export default Certificate;
