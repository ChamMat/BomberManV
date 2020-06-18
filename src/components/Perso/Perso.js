import React from 'react';
import PersoStyled from './PersoStyled';


const Perso = (props) => {
    const {
        name,
        imageSrc,
    } = props.datas;


  return (
      <PersoStyled datas = {props.datas}>
        <div className="playerName">{name}</div>
        <img src={imageSrc} alt="" />
      </PersoStyled>
  )
};

export default Perso;
