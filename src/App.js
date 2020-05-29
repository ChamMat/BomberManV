import React from 'react';
import './reset.css';

// import Home from './components/Home/index';
import Game from './components/Game/index';

function App() {
  return (
    <div className="App">
      <img className="background bleu" src="/image/background/country-platform-back.png" alt="fond bleu" />
      <img className="background foret" src="/image/background/country-platform-forest.png" alt="fond foret" />
      <img className="background chemin" src="/image/background/country-platform-tiles-example.png" alt="fond chemin" />
      
      <Game />
    </div>
  );
}

export default App;
