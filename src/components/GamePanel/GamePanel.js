import React from 'react';
import GamePanelStyled from './GamePanelStyled';
import platformPvp from 'datas/platformsPvp'

import Home from 'containers/Home.cont';
import MusicManager from 'containers/MusicManager.cont';
import Platform from 'components/Platform/index';
import Pvp from 'containers/Pvp.cont';
import GameMenu from 'containers/GameMenu.cont';

const GamePanel = (props) => {
  const {
    gameStyle,
    gameReady,
    menuOpen,
  } = props;



    return (
        <GamePanelStyled>
          { 
            gameReady &&
            <MusicManager />
          }
          { 
            gameStyle === '' && !menuOpen &&
            <Home />
          }
          { 
            gameStyle === 'localPvp' &&
            <div>
              {
                platformPvp.platforms.map((platform) => (
                  <Platform 
                    key = {platform.id}
                    top = {platform.top}
                    left = {platform.left}
                    height = {platform.height}
                    width = {platform.width}
                  />
                ))
              }
              <Pvp />
            </div>
          }

          {
            menuOpen && 
            <GameMenu />
          }
        </GamePanelStyled>

    )
};

export default GamePanel;
