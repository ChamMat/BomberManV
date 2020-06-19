import React, {useEffect} from 'react';
import './reset.css';
import './App.css';

import PreLoader from './containers/PreLoader.cont'

import AppStyled from './AppStyled';


function App(props) {
  const { setKeyInput } = props;

  const handleTouchStart = (evt) => {
    setKeyInput(evt.target.name, true);
  }

  const handleTouchEnd = (evt) => {
    setKeyInput(evt.target.name, false);
  }
  

  useEffect(()=>{
    const handleKeyDown = (evt) => {
      setKeyInput(evt.code, true);
    };

    const handleKeyUp = (evt) => {
      setKeyInput(evt.code, false);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
  },[setKeyInput]);

  return (
    <AppStyled>
      <div className="App">
        <PreLoader />
        
      </div>
    </AppStyled>
  );
}

export default App;
