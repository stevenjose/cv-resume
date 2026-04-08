import React from 'react';
import Loading from './Loading';
import { useSelector } from 'react-redux';

const Experience = () => {
  const userState = useSelector((state) => state.user);

  const myExperience = (
    <div>
      {userState.experience && userState.experience.length > 0
        ? Carga(userState.experience)
        : <Loading />}
    </div>
  );

  return (
    <div className='title'>
      <i className='fa fa-briefcase'></i>
      <h2>Experiencia</h2>
      <hr />
      {myExperience}
    </div>
  );
};

const Carga = (experience) => {
  return experience.map((exp) => {
    const duration = exp.current
      ? `${exp.startDate} – Presente`
      : `${exp.startDate} – ${exp.endDate}`;

    return (
      <div className='item exp-item' key={exp.id}>
        <div className='exp-header'>
          <div>
            <h3 className='exp-title'>{exp.jobTitle}</h3>
            <p className='exp-company'>
              <i className='fa fa-building' style={{ marginRight: 6 }}></i>
              {exp.company}
              {exp.location && (
                <span style={{ marginLeft: 8 }}>
                  <i className='fa fa-map-marker' style={{ marginRight: 4 }}></i>
                  {exp.location}
                </span>
              )}
            </p>
          </div>
          <span className='exp-date'>{duration}</span>
        </div>

        {exp.jobDescription && (
          <p className='exp-description'>{exp.jobDescription}</p>
        )}

        {exp.responsibilities && exp.responsibilities.length > 0 && (
          <ul className='exp-responsibilities'>
            {exp.responsibilities.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        )}

        {exp.technologies && exp.technologies.length > 0 && (
          <div className='exp-tech'>
            {exp.technologies.map((tech) => (
              <span key={tech} className='tech-badge'>{tech}</span>
            ))}
          </div>
        )}

        {exp.web && (
          <a
            href={exp.web}
            className='btn-outline-dark'
            target='_blank'
            rel='noopener noreferrer'
            style={{ marginTop: 12, display: 'inline-block' }}
          >
            <i className='fa fa-external-link' style={{ marginRight: 4 }}></i>
            {exp.company}
          </a>
        )}
      </div>
    );
  });
};

export default Experience;
