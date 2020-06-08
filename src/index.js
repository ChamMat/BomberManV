import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'container/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


//Musique by SketchyLogic https://opengameart.org/users/sketchylogic

// Metal Musique by azazel42 https://opengameart.org/users/azazel42

//Sound by SubspaceAudio https://juhanijunkala.com/

//Explosion by Lamoot https://opengameart.org/users/lamoot

// Background by ansimuz https://www.patreon.com/ansimuz

// Hero by grafxkid https://grafxkid.tumblr.com/
