import React, {useEffect} from 'react';
import './reset.css';
import './App.css';

import PreLoader from './containers/PreLoader.cont'

import AppStyled from './AppStyled';


function App(props) {
  const { setKeyInput } = props;
  
  
  const chrome = /Google Inc./;
  if (chrome.test(navigator.vendor)){
    
  }else{
    
  }

  const body =  document.querySelector('body');

  const handleFullScreen = () => {
    if (!document.fullscreenElement){
      body.requestFullscreen();
      document.querySelector('.fullScreen').classList.toggle('fullScreenIsOn');
    }else{
      document.exitFullscreen();
      document.querySelector('.fullScreen').classList.toggle('fullScreenIsOn');
    }
  };

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
        <div className="fullScreen" onClick={handleFullScreen} />
      </div>
    </AppStyled>
  );
}

export default App;
