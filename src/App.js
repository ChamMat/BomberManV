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
        <div className="buttonsMobil">
          <div className="buttonMobilWrapper">
            <div className="buttonDirection">
              <button
                className="buttonMobil buttonLeft"
                name = "ArrowLeft"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              />
              <button
                className="buttonMobil buttonRight"
                name = "ArrowRight"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              />
            </div>
            <div className="buttonAction">
              <button
                className="buttonMobil buttonAction"
                name = "ArrowDown"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              />
              <button
                className="buttonMobil buttonJump"
                name = "ArrowUp"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              />
            </div>
          </div>
        </div>
      </div>
    </AppStyled>
  );
}

export default App;
