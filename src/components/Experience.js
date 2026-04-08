import React, { useState } from 'react';
import Loading from './Loading';
import { useSelector } from 'react-redux';

const Experience = () => {
  const userState = useSelector((state) => state.user);

  return (
    <div className='title'>
      <i className='fa fa-briefcase'></i>
      <h2>Experiencia</h2>
      <hr/>
      <div>
        {userState.experience && userState.experience.length > 0
          ? userState.experience.map((exp) => <ExperienceCard key={exp.id} exp={exp} />)
          : <Loading />
        }
      </div>
    </div>
  );
};

const ExperienceCard = ({ exp }) => {
  const [expanded, setExpanded] = useState(true);
  const startYear = exp.startDate ? exp.startDate.substring(0, 7).replace('-', '/') : '';
  const endLabel = exp.current ? 'Presente' : (exp.endDate ? exp.endDate.substring(0, 7).replace('-', '/') : '');

  return (
    <div className='item exp-card'>
      <div className='exp-header'>
        <div className='exp-title-row'>
          <h3>
            {exp.position}
            {exp.current && <span className='badge-current'>Actual</span>}
          </h3>
          <span className='exp-company'>{exp.company}</span>
        </div>
        <div className='exp-meta'>
          {exp.location && <span><i className='fa fa-map-marker'></i> {exp.location}</span>}
          <span><i className='fa fa-calendar'></i> {startYear} – {endLabel}</span>
          {exp.duration && <span><i className='fa fa-clock-o'></i> {exp.duration}</span>}
        </div>
      </div>

      <p className='exp-description'>{exp.description}</p>

      <button className='exp-toggle' onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Ver menos' : 'Ver más'}
        <i className={`fa fa-chevron-${expanded ? 'up' : 'down'}`} style={{ marginLeft: 6 }}></i>
      </button>

      {expanded && (
        <div className='exp-details'>
          {exp.responsibilities && exp.responsibilities.length > 0 && (
            <div className='exp-section'>
              <h4><i className='fa fa-tasks'></i> Responsabilidades</h4>
              <ul className='responsibilities'>
                {exp.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
              </ul>
            </div>
          )}

          {exp.achievements && exp.achievements.length > 0 && (
            <div className='exp-section'>
              <h4><i className='fa fa-trophy'></i> Logros</h4>
              <ul className='achievements'>
                {exp.achievements.map((a, i) => <li key={i}>{a}</li>)}
              </ul>
            </div>
          )}

          {exp.technologies && exp.technologies.length > 0 && (
            <div className='exp-section'>
              <h4><i className='fa fa-code'></i> Tecnologías</h4>
              <div className='tech-tags'>
                {exp.technologies.map((tech) => (
                  <span key={tech} className='tech-tag'>{tech}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {exp.web && (
        <div className='exp-footer'>
          <a className='btn btn-outline-dark' href={exp.web} target='_blank' rel='noopener noreferrer'>
            <i className='fa fa-external-link'></i> {exp.company}
          </a>
        </div>
      )}
    </div>
  );
};

export default Experience;

