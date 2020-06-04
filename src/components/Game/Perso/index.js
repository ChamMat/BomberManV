import React from 'react';
import PropTypes from 'prop-types';
import StyledPerso from './StyledPerso';

const Perso = (props) => {
    const {
        name,
        posX,
        posY,
        direction,
        idle,
        walk,
        jump,
        idleImg,
        walkImg,
    } = props.datas;


    return (
        <StyledPerso
            posX={posX}
            posY={posY}
            direction={direction}
        >
            <div className="playerName">{name}</div>
            <div className="wrapper">
            
                {   idle &&
                    <div className={`perso ${idleImg}`} />
                }

                {
                    walk &&
                    <div className={`perso ${walkImg}`} />
                }

                {
                    jump &&
                    <div className={`perso jump`} />
                }
            </div>
        </StyledPerso>
    )
};

Perso.propTypes = {
    datas: PropTypes.shape({
        posX: PropTypes.number.isRequired,
        posY: PropTypes.number.isRequired,
        direction: PropTypes.string.isRequired,
        idle: PropTypes.bool.isRequired,
        walk: PropTypes.bool.isRequired,
        jump: PropTypes.bool.isRequired,
        idleImg: PropTypes.string.isRequired,
        walkImg: PropTypes.string.isRequired,
    }).isRequired,
}

export default Perso;