import React, { useState } from 'react';
import Loading from './Loading';
import { useSelector } from 'react-redux';

const CATEGORY_COLORS = {
  'Backend':     { bg: '#e8f4fd', border: '#0066cc', text: '#0052a3' },
  'Frontend':    { bg: '#fde8f4', border: '#cc0066', text: '#a30052' },
  'DevOps':      { bg: '#e8fdf0', border: '#27ae60', text: '#1e8449' },
  'Integración': { bg: '#fdf4e8', border: '#e67e22', text: '#ca6f1e' },
  'Testing':     { bg: '#f4e8fd', border: '#8e44ad', text: '#7d3c98' },
  'Metodología': { bg: '#e8fdf8', border: '#16a085', text: '#138d75' },
};

export const Skills = () => {
  const userState = useSelector((state) => state.user);
  const [skillVer, setSkillVer] = useState(1);
  const [etiquetaMas, setEtiquetaMas] = useState('ver-mas fa fa-arrow-down');

  const verMas = () => {
    if (skillVer === 0) {
      setEtiquetaMas('ver-mas fa fa-arrow-down');
      setSkillVer(1);
    } else {
      setEtiquetaMas('ver-mas fa fa-arrow-up');
      setSkillVer(0);
    }
  };

  const mySkillsVer = () => {
    if (skillVer) {
      return (
        <div className="skills-container">
          {userState.skills && userState.skills.length > 0
            ? renderSkills(userState.skills)
            : <Loading />
          }
        </div>
      );
    }
  };

  return (
    <div className='title'>
      <i className='fa fa-code'></i>
      <hr />
      <h3>
        Habilidades
        <i className={etiquetaMas} onClick={verMas} style={{ float: 'right' }}></i>
      </h3>
      <hr />
      {mySkillsVer()}
    </div>
  );
};

const renderSkills = (skills) => {
  const grouped = skills.reduce((acc, skill) => {
    const cat = skill.category || 'General';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(skill);
    return acc;
  }, {});

  return Object.entries(grouped).map(([category, catSkills]) => {
    const colors = CATEGORY_COLORS[category] || { bg: '#f0f0f0', border: '#999', text: '#555' };
    return (
      <div className="skills-category" key={category}>
        <h4
          className="skills-category-title"
          style={{ borderLeftColor: colors.border, color: colors.text }}
        >
          {category}
        </h4>
        <div className="skills-badges">
          {catSkills.map((skill) => (
            <div className="skill-item" key={skill.id || skill.name}>
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percent">{skill.percentage}</span>
              </div>
              <div className="skill-bar-track">
                <div
                  className="skill-bar-fill"
                  style={{
                    width: skill.percentage,
                    background: `linear-gradient(90deg, ${colors.border}, ${colors.text})`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  });
};

