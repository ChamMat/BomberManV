import React from 'react';
import StyledBomb from './StyledBomb';

const Bombes = (datas) => {
    const imageBomb = "bomb0";
    return (
        <StyledBomb props = {datas}>
            <div className= {imageBomb}/>
        </StyledBomb>
    );
}

export default Bombes;