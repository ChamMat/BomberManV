import React from 'react';
import StyledHome from './StyledHome';

const Home = () =>
{
    return (
        <StyledHome>
            <h1>BomberMan V</h1>
            <div className="menu cadre">
                <button>Nouvelle partie</button>
                <button>test</button>
            </div>
        </StyledHome>
    )
};

export default Home;