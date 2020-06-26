import React, { useState } from 'react';
import MenuHomeStyled from './MenuHomeStyled';

const MenuHome = (props) => {

  const {
    setGameStyle,
  } = props;

  const [menu, setMenu] = useState('');

  const soundClick = new Audio('audio/sound/menuClick.wav');
  const handleClickLocalPvp = () => {
    soundClick.volume = .1;
    soundClick.play();
    setGameStyle('localPvp');
  };

  const handleClickCredit = () => {
    setMenu('credit');
  };

  const handleClickMenu = () => {
    setMenu('');
  };

  const handleClickHowPlay = () => {
    setMenu('howPlay');
  }

    return (
        <MenuHomeStyled>
          { menu === '' &&
            <div className="menuHomeWrapper">
                <h2>Choose your game!</h2>
                <ul>
                  <li>
                    <button
                      className="button gameList"
                      onClick={handleClickLocalPvp}
                    >
                      local player VS local player
                    </button>
                  </li>
                </ul>

                <button
                  className="button credit"
                  onClick={handleClickCredit}
                >
                    credits
                </button>

                <button
                  className="button howPlay"
                  onClick={handleClickHowPlay}
                >
                    How to play?
                </button>
            </div>
          }

          { menu === 'credit' &&
            <div className="menuHomeWrapper">
                <h2>CREDIT</h2>
                <ul>
                  <li>
                    Create by: <a href="http://mathieuchamoulaud.com">Mathieu Chamoulaud</a>
                  </li>
                  <li>
                   musique: <a href="https://opengameart.org/users/sketchylogic">SketchyLogic</a>
                  </li>
                  <li>
                    sound: <a href="https://opengameart.org/users/subspaceaudio">SubspaceAudio</a>
                  </li>
                  <li>
                    hero: <a href="https://grafxkid.tumblr.com/">GrafxKid</a>
                  </li>
                </ul>

                <button
                  className="button credit"
                  onClick={handleClickMenu}
                >
                    return
                </button>
            </div>
          }

          { menu === 'howPlay' &&
            <div className="menuHomeWrapper">
                <h2>How i play ?</h2>
                <ul>
                  <li className="tuto">
                    You must elimate the other player.
                  </li>
                  <li className="tuto">
                   Player 1: use arrow buttons
                  </li>
                  <li className="tuto">
                   Player 2: use AWDS (qwerty) or QZDS (azerty)
                  </li>
                  <li className="tuto">
                    You can take speed bonus and bomb bonus for be more efficient
                  </li>
                </ul>

                <button
                  className="button credit"
                  onClick={handleClickMenu}
                >
                    return
                </button>
            </div>
          }
        </MenuHomeStyled>
    );
};

export default MenuHome;
