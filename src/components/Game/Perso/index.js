import React from 'react';
import PropTypes from 'prop-types';
import StyledPerso from './StyledPerso';

const Perso = (props) => {
    const {
        posX,
        posY,
        direction,
    } = props.datas;

    return (
        <StyledPerso
            posX={posX}
            posY={posY}
            direction={direction}
        >
            <div className="perso idle0"/>
        </StyledPerso>
    )
};

Perso.propTypes = {
    datas: PropTypes.shape({
        posX: PropTypes.number.isRequired,
        posY: PropTypes.number.isRequired,
        direction: PropTypes.string.isRequired,
    }).isRequired,
}

export default Perso;