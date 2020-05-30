import React from 'react';
import PropTypes from 'prop-types';
import StyledGame from './StyledGame';

import Perso from './Perso';

const Game = (props) => {
    const {
        perso1,
        perso2,
    } = props;

    return (
        <StyledGame>
            <Perso 
                datas={perso1}
            />
            <Perso
                datas={perso2}
            />
        </StyledGame>
    )
};

Game.propTypes = {
    perso1: PropTypes.object.isRequired,
    perso2: PropTypes.object.isRequired,
};

export default Game;