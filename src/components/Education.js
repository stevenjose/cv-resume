import React from 'react';
import Loading from './Loading';

const Education = ({education}) => {
  const myEducation = (
    <div>
      { education.length > 0 ? (Carga(education)) : <Loading />}
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
