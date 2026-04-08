import React, { useState } from 'react';
import Loading from './Loading';
import { useSelector } from 'react-redux';

const levelLabels = {
  expert: 'Experto',
  advanced: 'Avanzado',
  intermediate: 'Intermedio',
  beginner: 'Básico',
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

  return (
    <div className='title'>
      <i className='fa fa-code'></i>
      <hr/>
      <h3>Habilidades
        <i className={etiquetaMas} onClick={verMas} style={{ float: 'right' }}></i>
      </h3>
      <hr/>
      {skillVer ? (
        <div className='mt-4'>
          {userState.skills && userState.skills.length > 0
            ? userState.skills.map((category) => (
                <div key={category.category} className='skill-category'>
                  <div className='skill-category-header'>
                    <h4 className='skill-category-title'>{category.category}</h4>
                    <span className={`skill-level-badge level-${category.level}`}>
                      {levelLabels[category.level] || category.level}
                    </span>
                  </div>
                  <div className='skill-items-grid'>
                    {category.items.map((item) => (
                      <div className='item w33' key={item.name}>
                        <div className='skill-item-header'>
                          <h3>{item.name}</h3>
                          <span className='skill-percent'>{item.level}%</span>
                        </div>
                        <div className={getBarClass(item.level)} style={{ width: `${item.level}%` }}>
                          <span style={{ width: '100%' }}></span>
                        </div>
                        <small className='skill-years'>{item.years} año{item.years !== 1 ? 's' : ''}</small>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            : <Loading />
          }
        </div>
      ) : null}
    </div>
  );
};

const getBarClass = (level) => {
  if (level >= 90) return 'skills progress-bar progress-bar-striped bg-success';
  if (level >= 75) return 'skills progress-bar progress-bar-striped bg-info';
  if (level >= 60) return 'skills progress-bar progress-bar-striped bg-warning';
  return 'skills progress-bar progress-bar-striped bg-danger';
};

