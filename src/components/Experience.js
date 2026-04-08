import React from 'react';
import Loading from './Loading';
import { useSelector } from 'react-redux';

const TECH_ICONS = {
  'Java':         { bg: '#f89820', label: 'Java' },
  'Spring Boot':  { bg: '#6db33f', label: 'Spring' },
  'Angular':      { bg: '#dd0031', label: 'Angular' },
  'TypeScript':   { bg: '#3178c6', label: 'TS' },
  'RxJS':         { bg: '#b7178c', label: 'RxJS' },
  'Docker':       { bg: '#2496ed', label: 'Docker' },
  'RabbitMQ':     { bg: '#ff6600', label: 'RabbitMQ' },
  'Kibana':       { bg: '#005571', label: 'Kibana' },
  'Alfresco':     { bg: '#1f5cac', label: 'Alfresco' },
  'React':        { bg: '#61dafb', label: 'React' },
  'Node.js':      { bg: '#339933', label: 'Node' },
  'JavaScript':   { bg: '#f7df1e', label: 'JS' },
};

const Experience = () => {
  const userState = useSelector((state) => state.user);

  const myExperience = (
    <div>
      {userState.experience && userState.experience.length > 0
        ? <div className="experience-grid">{renderExperience(userState.experience)}</div>
        : <Loading />
      }
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

const renderExperience = (experience) => {
  return experience.map((exp) => (
    <div className="experience-card" key={exp.id}>
      <div className="experience-card-header">
        <div>
          <h3 className="experience-job-title">{exp.jobTitle}</h3>
          <div className="experience-company">
            <i className="fa fa-building" style={{ marginRight: 6 }}></i>
            {exp.company}
          </div>
        </div>
        <div className="experience-meta">
          {exp.location && (
            <span className="experience-location">
              <i className="fa fa-map-marker" style={{ marginRight: 4 }}></i>
              {exp.location}
            </span>
          )}
          <span className="experience-period">
            <i className="fa fa-calendar" style={{ marginRight: 4 }}></i>
            {exp.startDate} – {exp.endDate}
          </span>
        </div>
      </div>
      <p className="experience-description">{exp.jobDescription}</p>
      {exp.stack && exp.stack.length > 0 && (
        <div className="experience-stack">
          {exp.stack.map((tech) => {
            const icon = TECH_ICONS[tech];
            return (
              <span
                key={tech}
                className="tech-badge"
                style={{ backgroundColor: icon ? icon.bg : '#6c757d' }}
              >
                {icon ? icon.label : tech}
              </span>
            );
          })}
        </div>
      )}
      <div className="experience-card-footer">
        <a className="experience-link" href={exp.web} target="_blank" rel="noopener noreferrer">
          <i className="fa fa-external-link" style={{ marginRight: 6 }}></i>
          {exp.company}
        </a>
      </div>
    </div>
  ));
};

export default Experience;

