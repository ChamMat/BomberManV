import React from 'react';
import MenuHomeStyled from './MenuHomeStyled';

const MenuHome = (props) => {

  const {
    setGameStyle,
  } = props;

  const soundClick = new Audio('audio/sound/menuClick.wav');
  const handleClickLocalPvp = () => {
    soundClick.volume = .1;
    soundClick.play();
    setGameStyle('localPvp');
  };

    return (
        <MenuHomeStyled>
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
            </div>
        </MenuHomeStyled>
    );
};

export default MenuHome;
