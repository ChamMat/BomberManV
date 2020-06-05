import React from 'react';
import './reset.css';

import {
  Switch,
  Route,
} from 'react-router-dom';

import Home from './components/Home/index';
import Platform from './components/Platform/index';
import Game from './container/Game';
import Menu from './container/Menu';

import platformData from 'datas/platforms';

function App() {

  return (
    <div className="App">
      <img className="background bleu" src="/image/background/country-platform-back.png" alt="fond bleu" />
      <img className="background foret" src="/image/background/country-platform-forest.png" alt="fond foret" />
      {/* <img className="background chemin" src="/image/background/country-platform-tiles-example.png" alt="fond chemin" /> */}

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

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/game/LocalPvP">
          <Game />
          <Menu />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
