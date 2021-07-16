import React from 'react';
import Loading from './Loading';
import { useSelector } from 'react-redux';

const Education = () => {
  const useState = useSelector((state) => state.user);
  const myEducation = (
    <div>
      { useState.education && useState.education.length > 0 ? (Carga(useState.education)) : <Loading />}
    </div>
  );
  return (
    <div className='title'>
      <i className='fa fa-graduation-cap'></i>
      <h2>Educación</h2>
      <hr/>
      {myEducation}
    </div>
  )
};

const Carga = (education)=>{
      return education.map((edu) => {
           return <div className='item' key={edu.degree}>
              <h3>{edu.degree} @ {edu.institution} <span>{edu.startDate} - {edu.endDate}</span></h3>
              <p>{edu.description}</p>
            </div>
        })
}


export default Education;
