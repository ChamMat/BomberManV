import React from 'react';
import StyledBomb from './StyledBomb';

const Bombes = (datas) => {
    const imageBomb = datas.datas.image;

    return (
        <StyledBomb props = {datas}>
            <div className= {`bombe ${imageBomb}`}/>
        </StyledBomb>
    );
}

export default Bombes;