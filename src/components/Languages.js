import React from 'react';
import { useSelector } from 'react-redux';

const Languages = () => {
  const userState = useSelector((state) => state.user);
  const languages = userState.languages;

  if (!languages || languages.length === 0) return null;

  return (
    <div className='title'>
      <i className='fa fa-globe'></i>
      <h2>Idiomas</h2>
      <hr />
      <div className='languages-grid'>
        {languages.map((lang) => (
          <div className='item language-item' key={lang.id}>
            <div className='language-header'>
              <span className='language-flag'>{lang.flag}</span>
              <div>
                <h3>{lang.name}</h3>
                <span className='exp-date'>{lang.level}</span>
              </div>
            </div>
            <div className='skills skill-bar' style={{ marginTop: 10 }}>
              <span style={{ width: lang.percentage }}></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Languages;
