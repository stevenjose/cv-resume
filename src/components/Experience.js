import React from 'react';
import Loading from './Loading';
import { useSelector } from 'react-redux';

const Experience = () => {
  const { experience } = useSelector((state) => state.user);

  return (
    <div className='title'>
      <i className='fa fa-briefcase'></i>
      <h2>Experiencia</h2>
      <hr/>
      {experience && experience.length > 0
        ? <ExperienceList experience={experience} />
        : <Loading />
      }
    </div>
  );
};

const ExperienceList = ({ experience }) => (
  <div className="mt-4">
    {experience.map((exp) => (
      <div className="item" key={exp.id}>
        <h3>
          {exp.jobTitle} @ {exp.company}
          {exp.startDate && (
            <span>{exp.startDate} — {exp.endDate || 'Presente'}</span>
          )}
        </h3>
        <p>{exp.jobDescription}</p>

        {exp.responsibilities && exp.responsibilities.length > 0 && (
          <ul className="exp-list">
            {exp.responsibilities.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        )}

        {exp.technologies && exp.technologies.length > 0 && (
          <div className="tech-badges">
            {exp.technologies.map((tech) => (
              <span className="tech-badge" key={tech}>{tech}</span>
            ))}
          </div>
        )}

        {exp.web && (
          <a
            href={exp.web}
            className="btn btn-outline-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            {exp.company}
          </a>
        )}
      </div>
    ))}
  </div>
);

export default Experience;

