import React, { useEffect } from 'react';
import StyledHome from './StyledHome';

const Home = (props) => {

    const {
        setMusique,
        musiqueMenu,
        volume,
    } = props;

    const handleClickLocalPVP = () => {
        const sonMenu = new Audio('/son/sfx_sounds_button6.wav');
        sonMenu.volume = .2;
        sonMenu.play();
        musiqueMenu.pause();
        setMusique('musiqueMenu', '');
        props.newPage('localPVP');
    }

    useEffect(() => {
        if (!musiqueMenu) {
            const musique = new Audio('/son/Mercury.wav');
            setMusique('musiqueMenu', musique);
        }else {
            musiqueMenu.play();
            musiqueMenu.loop = true;
            musiqueMenu.volume=volume;
        }
    },[musiqueMenu, setMusique]);

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