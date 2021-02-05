import React from 'react';

const Experience = (props) => {
  const myExperience = (
    <div>
      {props.experience.map((exp) =>
        <div className='item' key={exp.startDate}>
          <h3>{exp.jobTitle} @ {exp.company} <span>{exp.startDate} - {exp.endDate}</span></h3>
          <p>{exp.jobDescription}</p>
        </div>
      )}
    </div>
  );
  return (
    <div className='title'>
      <i className='fa fa-briefcase'></i>
      <h2>EXPERIENCIA</h2>
      {myExperience}
    </div>
  )
};

export default Experience;
