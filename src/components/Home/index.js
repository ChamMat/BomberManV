import React from 'react';
import { Link } from 'react-router-dom';
import StyledHome from './StyledHome';

const Home = () =>
{
    return (
        <StyledHome>
            <h1>BomberMan V</h1>
            <div className="menu cadre">
                <button><Link to={`/game/LocalPvP`}>Joueur contre Joueur</Link></button>
            </div>
        </StyledHome>
    )
};

export default Home;