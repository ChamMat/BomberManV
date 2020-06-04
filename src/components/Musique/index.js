import React from 'react';

import StyledMusique from './StyledMusique';

const Musique = () => {
    const musique = new Audio('/son/Lost_In_The_Dawn.mp3');
    musique.volume = 0.20;
    musique.play();

    const handleMusiqueMute = () => {

        if(!musique.paused) {
            musique.pause();
        }else {
            musique.play();
        }

    }

    return (
        <StyledMusique onClick={handleMusiqueMute} />
    );
};

export default Musique;