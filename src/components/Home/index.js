import React from 'react';
import StyledHome from './StyledHome';

const Home = (props) => {

    const handleClickLocalPVP = () => {
        props.newPage('localPVP');
    }

    return (
        <StyledHome>
            <h1>BomberManV</h1>
            <div className="menu cadre">
                <button onClick={handleClickLocalPVP}>Joueur contre Joueur (local)</button>
            </div>
        </StyledHome>
    )
};

export default Home;