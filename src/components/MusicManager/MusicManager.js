import React, { useEffect, useState } from 'react';
import MusicManagerStyled from './MusicManagerStyled';

const MusicManager = (props) => {
  const {
    gameStyle,
    gameReady,
    setNewMusic,
    mercuryMusic,
    mainBossMusic,
    bossIntroMusic,
    setStateMenu,
    musicVolume,
    setNewEffectSound,
  } = props;

  const [keyListener, setKeyListerner]= useState(false);

  const soundClick = new Audio('audio/sound/menuClick.wav');
  

  if (mercuryMusic !== ''){
    if (gameReady && gameStyle === '') {
      mercuryMusic.play();
      mercuryMusic.volume = musicVolume;
      mercuryMusic.loop = true;
    }

    if (gameStyle !== '') {
      mercuryMusic.currentTime = 0;
      mercuryMusic.volume = 0;
    }
  }


  if (mainBossMusic !== '' && bossIntroMusic !== ''){

    if (gameStyle === 'localPvp' && !bossIntroMusic.ended) {
      bossIntroMusic.play();
      bossIntroMusic.volume = musicVolume;
    }else {
      mainBossMusic.volume = musicVolume;
    }

  }

  const handleMenuOpen = () => {
    soundClick.volume = .1;
    soundClick.play();
    setStateMenu();
  };

  const handleMenuKeyDown = (evt) => {
    if(evt.key === 'Escape') {
      handleMenuOpen();
    }
  };

  useEffect(() => {
    if (!keyListener) {
      document.addEventListener('keydown', handleMenuKeyDown);
    }
  });

  useEffect(() => {
    if(!keyListener) {
      setKeyListerner(true);
    }
  }, [setKeyListerner, keyListener]);

  useEffect(() => {
    const mercury = new Audio(`audio/music/Mercury.wav`);
    setNewMusic('mercury', mercury);
    const mainBoss = new Audio('audio/music/BossMain.wav');
    setNewMusic('mainBoss', mainBoss);
    const bossIntro = new Audio('audio/music/BossIntro.wav');
    setNewMusic('bossIntro', bossIntro);
    const bombBlast = new Audio('audio/sound/bombBlast.flac');
    setNewEffectSound('bombBlast', bombBlast);
    const bombBonusSound = new Audio('audio/sound/bombBonusSound.wav');
    setNewEffectSound('bombBonusSound', bombBonusSound);
    const menuClick = new Audio('audio/sound/menuClick.wav');
    setNewEffectSound('menuClick', menuClick);
    const speedBonusSound = new Audio('audio/sound/speedBonusSound.wav');
    setNewEffectSound('speedBonusSound', speedBonusSound);
  }, [setNewMusic,setNewEffectSound]);

  useEffect(() => {
    if (bossIntroMusic !== '' && !bossIntroMusic.ended) {
      bossIntroMusic.addEventListener('ended', () => {
        mainBossMusic.play();
        mainBossMusic.volume = musicVolume;
        mainBossMusic.loop = true;
      })
    }

  }, [bossIntroMusic, mainBossMusic, musicVolume])

  return (
    <MusicManagerStyled>
    <div>
      <img className="icon" src="image/gear.png" alt="" onClick={handleMenuOpen} />
    </div>
    </MusicManagerStyled>
  );
};

export default MusicManager;
