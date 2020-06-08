import React, { useEffect } from 'react';
import './reset.css';

import Home from './container/Home';
import Platform from './components/Platform/index';
import Game from './container/Game';
import Menu from './container/Menu';

import platformData from 'datas/platforms';

function App(props) {

  const page = props.page;
  const { newKeyInput } = props;


useEffect(() => {

  const handleKeyDown = (evt) => {
    let key;
    let value;

    switch (evt.code) {
        case 'ArrowUp':
                key = 'p1Up';
                value = true;
                newKeyInput(key, value);
        break;
        case 'ArrowLeft':
            key = 'p1Left';
            value = true;
            newKeyInput(key, value);
        break;
        case 'ArrowRight':
            key = 'p1Right';
            value = true;
            newKeyInput(key, value);
        break;
        case 'ArrowDown':
            key = 'p1Bomb';
            value = true;
            newKeyInput(key, value);
        break;
        case 'KeyW':
            key = 'p2Up';
            value = true;
            newKeyInput(key, value);
        break;
        case 'KeyA':
            key = 'p2Left';
            value = true;
            newKeyInput(key, value);
        break;
        case 'KeyD':
            key = 'p2Right';
            value = true;
            newKeyInput(key, value);
        break;
        case 'KeyS':
            key = 'p2Bomb';
            value = true;
            newKeyInput(key, value);
        break;
        default:
    }
};

const handleKeyUp = (evt) => {
    let key;
    let value;

    switch (evt.code) {
        case 'ArrowUp':
            key = 'p1Up';
            value = false;
            newKeyInput(key, value);
        break;
        case 'ArrowLeft':
            key = 'p1Left';
            value = false;
            newKeyInput(key, value);
        break;
        case 'ArrowRight':
            key = 'p1Right';
            value = false;
            newKeyInput(key, value);
        break;
        case 'ArrowDown':
            key = 'p1Bomb';
            value = false;
            newKeyInput(key, value);
        break;
        case 'KeyW':
            key = 'p2Up';
            value = false;
            newKeyInput(key, value);
        break;
        case 'KeyA':
            key = 'p2Left';
            value = false;
            newKeyInput(key, value);
        break;
        case 'KeyD':
            key = 'p2Right';
            value = false;
            newKeyInput(key, value);
        break;
        case 'KeyS':
            key = 'p2Bomb';
            value = false;
            newKeyInput(key, value);
        break;
        default:
    }
};
  document.addEventListener('keydown', handleKeyDown);
  document.addEventListener('keyup', handleKeyUp);
},[newKeyInput]);

  return (
    <div className="App">
      <img className="background bleu" src="/image/background/country-platform-back.png" alt="fond bleu" />
      <img className="background foret" src="/image/background/country-platform-forest.png" alt="fond foret" />

      {
        platformData.platforms.map((platform) => (
          <Platform 
            key = {platform.id}
            top = {platform.top}
            left = {platform.left}
            height = {platform.height}
            width = {platform.width}
          />
        ))
      }

      {page==='home' &&
        <Home />
      }

      {page==='localPVP' &&
        <div>
          <Game />
          <Menu />
        </div>
      }

    </div>
  );
}

export default App;
