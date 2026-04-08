import React, { useState } from 'react';
import Loading from './Loading';
import { useSelector } from 'react-redux';

export const Skills = () => {
  const userState = useSelector((state) => state.user);
  const [expanded, setExpanded] = useState(true);

  const toggle = () => setExpanded((prev) => !prev);

  const mySkills = () => {
    if (!expanded) return null;
    if (!userState.skills || userState.skills.length === 0) return <Loading />;
    return <SkillsGrid skills={userState.skills} />;
  };

  return (
    <div className='title'>
      <i className='fa fa-code'></i>
      <hr />
      <h3>
        Habilidades
        <i
          className={`ver-mas fa ${expanded ? 'fa-arrow-up' : 'fa-arrow-down'}`}
          onClick={toggle}
          style={{ float: 'right' }}
          aria-label={expanded ? 'Colapsar habilidades' : 'Expandir habilidades'}
        ></i>
      </h3>
      <hr />
      {mySkills()}
    </div>
  );
};

const SkillsGrid = ({ skills }) => {
  // Group skills by category
  const categories = skills.reduce((acc, skill) => {
    const cat = skill.category || 'General';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(skill);
    return acc;
  }, {});

  return (
    <div className='skills-grid'>
      {Object.entries(categories).map(([cat, items]) => (
        <div key={cat} className='skills-category'>
          <h4 className='skills-category-title'>{cat}</h4>
          {items.map((skill) => (
            <div className='skill-item' key={skill.name}>
              <div className='skill-label'>
                <span className='skill-name'>{skill.name}</span>
                <span className='skill-pct'>{skill.percentage}</span>
              </div>
              <div className='skills skill-bar'>
                <span style={{ width: skill.percentage }}></span>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
