import React from 'react';
import BombStyled from './BombStyled';


const Bomb = (props) => {

  let className = '';
  if (props.datas.action === 'explode'){
    className = `explode${props.datas.nbrImg}`
  }
  if (props.datas.action === 'idle'){
     if(props.datas.tempoImg <= 4) {
      className = 'little';
     }else{
       className = 'big';
     }
  }


  return (
      <BombStyled datas = {props.datas}>
        <img className = {className} src={props.datas.imageSrc} alt="" />
        {/* <img className = {`explode${test}`} src={`image/explosion/explosion${test}.png`} alt="" /> */}

      </BombStyled>
  )
};

export default Bomb;
