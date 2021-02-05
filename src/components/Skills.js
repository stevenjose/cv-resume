import React, { useState } from 'react';

export const  Skills = ({ skills }) => {

  const [skillVer, setSkillVer] = useState(0);
  const [etiquetaMas, setEtiquetaMas] = useState('ver-mas fa fa-arrow-down');
  const verMas = () =>{
    if(skillVer === 0){
      setEtiquetaMas('ver-mas fa fa-arrow-up');
      setSkillVer(1);

    }else{
      setEtiquetaMas('ver-mas fa fa-arrow-down');
      setSkillVer(0);
    }
  }
  const ramdow = () => {
    const colores =
    [
      {name: 'bg-success'},
      {name: 'bg-info'},
      {name: 'bg-warning'},
      {name: 'bg-danger'},
    ]
    var result = colores[Math.floor(Math.random() * 4)];
    return 'skills progress-bar progress-bar-striped '+result.name
  };

  const mySkillsVer = () =>{
    if(skillVer){
      return(
        <div className="mt-4">
          {skills.map((skll) =>
            <div className='item w33' key={skll.name}>
              <h3>{skll.name}</h3>
            <div className={ ramdow() }  style= {{width: skll.percentage }}>
                <span className="" style={{width: skll.percentage}}></span>
              </div>
            </div>
          )}
        </div>
      )
    }

  }

  return(
    <div className='title'>
      <i className='fa fa-code'></i>

      <h2>HABILIDADES
        <i className={ etiquetaMas } onClick={ verMas } style={{float: 'right'}}></i>
      </h2>
      { mySkillsVer() }
    </div>
  );
}
