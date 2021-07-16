import React, { useState } from 'react';
import Loading from './Loading';
import { useSelector } from 'react-redux';

export const  Skills = () => {
  const userState = useSelector((state) => state.user);
  const [skillVer, setSkillVer] = useState(1);
  const [etiquetaMas, setEtiquetaMas] = useState('ver-mas fa fa-arrow-down');
  const verMas = () =>{
    if(skillVer === 0){
      setEtiquetaMas('ver-mas fa fa-arrow-down');
      setSkillVer(1);

    }else{
      setEtiquetaMas('ver-mas fa fa-arrow-up');
      setSkillVer(0);
    }
  }

  const mySkillsVer = () =>{
    if(skillVer){
      return(
        <div className="mt-4">
          {userState.skills && userState.skills.length > 0 ? (Carga(userState.skills)) : <Loading />}
        </div>
      )
    }

  }

  return(
    <div className='title'>
      <i className='fa fa-code'></i>
      <hr/>
      <h3>Habilidades
        <i className={ etiquetaMas } onClick={ verMas } style={{float: 'right'}}></i>
      </h3>
      <hr/>
      { mySkillsVer() }
     
     
    </div>
  );
}

const Carga = (skills)=>{
      return skills.map((skll) => {
            return <div className='item w33' key={skll.name}>
              <h3>{skll.name}</h3>
              <div className={ ramdow() }  style= {{width: skll.percentage }}>
                <span className="" style={{width: skll.percentage}}></span>
              </div>
            </div>
        })
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
