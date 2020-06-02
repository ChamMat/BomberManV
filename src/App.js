import React from 'react';
import './reset.css';

// import Home from './components/Home/index';
import Platform from './components/Platform/index';
import Game from './container/Game';

import platformData from 'datas/platforms';

function App() {

  return (
    <div className="App">
      <img className="background bleu" src="/image/background/country-platform-back.png" alt="fond bleu" />
      <img className="background foret" src="/image/background/country-platform-forest.png" alt="fond foret" />
      <img className="background chemin" src="/image/background/country-platform-tiles-example.png" alt="fond chemin" />
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
      <Game />
    </div>
  );
}

export default App;
