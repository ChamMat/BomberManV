import React, { useEffect } from 'react';

import StyledMusique from './StyledMusique';

const Musique = (props) => {

    const pause = props.pause;

    // if (props.musiqueAmbiance && !props.musique){
    //     props.musiqueAmbiance.pause();
    // }else if(props.musiqueAmbiance && props.musique){
    //     props.musiqueAmbiance.play();
    // }

    if (props.musiqueAmbiance){
        props.musiqueAmbiance.volume = props.volumeMusique;
    }


    const handleMenu = () => {
        props.dispatchPause();
    };

    const handleMusiqueMute = () => {
        console.log("musique mute");
    }

    const handleClickVolumeMusiquePlus = () => {
        props.volumeMusiquePlus();
    };

    const handleClickVolumeMusiqueMoin = () => {
        props.volumeMusiqueMoin();
    };

    const handleClickVolumeExplosionPlus = () => {
        let volume = props.volumeExplosion +0.1;
        if (volume > 1){
            volume = 1;
        }
        let explosionSon = new Audio('/son/DeathFlash.flac'); 
        explosionSon.volume = volume;
        explosionSon.play();

        props.volumeExplosionPlus();
    };

    const handleClickVolumeExplosionMoin = () => {
        let volume = props.volumeExplosion -0.1;
        if (volume < 0){
            volume = 0;
        }
        let explosionSon = new Audio('/son/DeathFlash.flac'); 
        explosionSon.volume = volume;
        explosionSon.play();
        props.volumeExplosionMoin();
    };

    const handleClickMenuPrincipal = () => {
        props.musiqueAmbiance.pause();

    };

    useEffect(() => {
        if (!props.musiqueAmbiance) {
            const musique = new Audio('/son/Lost_In_The_Dawn.mp3');
            props.setMusique(musique);
        }else {
            if (props.musique){
            props.musiqueAmbiance.play();
            props.musiqueAmbiance.loop = true;
            props.musiqueAmbiance.volume= props.volumeMusique;
            }
        }
    },[props.musiqueAmbiance]);

    const volumeMusique = props.volumeMusique * 10;
    const volumeExplosion = props.volumeExplosion * 10;

    return (
        <StyledMusique>
            <div
                className="icon"
                onClick={handleMenu}    
            />

            { pause && 
                <div className="fondNoir">
                    <div
                        className="menuModal"
                    >
                        <h2>Menu Options</h2>
                        <ul>
                            <li><h3>Musique</h3>
                                <ul>
                                    <li className="optionText">Volume Musique: <button className="buttonVolume" onClick={handleClickVolumeMusiqueMoin}>-</button> <button className="buttonVolume" onClick={handleClickVolumeMusiquePlus}>+</button> <span className="volume">{volumeMusique}/10</span></li>
                                    <li className="optionText">Volume Explosion: <button className="buttonVolume" onClick={handleClickVolumeExplosionMoin}>-</button> <button className="buttonVolume" onClick={handleClickVolumeExplosionPlus}>+</button> <span className="volume">{volumeExplosion}/10</span></li>
                                </ul>
                            </li>
                            <li className="buttonMenu"><button onClick={handleClickMenuPrincipal}>Revenir au menu principal</button></li>
                            <li className="buttonMenu"><button onClick={handleMenu}>Retour au jeu</button></li>
                        </ul>
                        
                    </div>
                </div>
            }
        </StyledMusique>
    );
};

export default Musique;