import React, {useEffect} from 'react';
import './reset.css';
import './App.css';

import PreLoader from './containers/PreLoader.cont'


function App(props) {
  const { setKeyInput } = props;
  

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
    <div className="App">
      <PreLoader />
    </div>
  );
}

export default App;
