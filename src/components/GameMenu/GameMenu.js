import React from 'react';
import GameMenuStyled from './GameMenuStyled';

const GameMenu = (props) => {

  const {
    newVolume,
    musicVolume,
    effectVolume,
    setStateMenu,
    setGameStyle
  } = props;

  const soundClick = new Audio('audio/sound/menuClick.wav');


  const handleClickButton = (evt) => {
    let newMusicVolume;
    soundClick.volume = .1;
    soundClick.play();
    const soundEffect = new Audio('audio/sound/bombBlast.flac');

    switch(evt.target.name) {
      case "musicMinus":
        newMusicVolume = musicVolume - 0.1;
        if (newMusicVolume < 0) {
          newMusicVolume = 0;
        }
        newVolume('volumeMusic', newMusicVolume);
      break
      case "musicMore":
        newMusicVolume = musicVolume + 0.1;
        if (newMusicVolume > 1) {
          newMusicVolume = 1;
        }
        newVolume('volumeMusic', newMusicVolume);
      break
      case "effectMinus":
        newMusicVolume = effectVolume - 0.1;
        if (newMusicVolume < 0) {
          newMusicVolume = 0;
        }
        soundEffect.volume = newMusicVolume;
        soundEffect.play();
        newVolume('volumeEffect', newMusicVolume);
      break
      case "effectMore":
        newMusicVolume = effectVolume + 0.1;
        if (newMusicVolume > 1) {
          newMusicVolume = 1;
        }
        soundEffect.volume = newMusicVolume;
        soundEffect.play();
        newVolume('volumeEffect', newMusicVolume);
      break
      default:;
    }
  }

  const showVolume = (value) => (
    value === 1 ? `${value*10}` : `0${value*10}`
  );

  const handleClickReturnGame = () => {
    soundClick.volume = .1;
    soundClick.play();
    setStateMenu();
  };

  const handleClickGoHome = () => {
    soundClick.volume = .1;
    soundClick.play();
    setStateMenu();
    setGameStyle('');
  };
  
  return (
    <GameMenuStyled>
      <h1>Options</h1>

      <ul>
        <li>Music volume: <span>{showVolume(musicVolume)}/10</span><button name="musicMinus" onClick={handleClickButton} className="button volumeButton">-</button> <button name="musicMore" onClick={handleClickButton} className="button volumeButton">+</button></li>
        <li>Effect volume: <span>{showVolume(effectVolume)}/10</span><button name="effectMinus" onClick={handleClickButton} className="button volumeButton">-</button> <button name="effectMore" onClick={handleClickButton} className="button volumeButton">+</button></li>
        <li className="liButton"><button onClick={handleClickReturnGame} className="button backButton">Return game</button></li>
        <li className="liButton"><button onClick={handleClickGoHome} className="button backButton">Go Home</button></li>
      </ul>
      
    </GameMenuStyled>
  );
};

export default GameMenu;
