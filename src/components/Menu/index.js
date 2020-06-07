import React, { useEffect } from 'react';

import persosLocalReset from 'datas/persoLocal';

import StyledMusique from './StyledMusique';

const Musique = (props) => {

    const {
        musiqueAmbiance,
        musique,
        setMusique,
        finDePartie,
        persos,
        totaleBombe,
        resetMenu,
        bombReset,
        persoReset,
    } = props;


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


    const handleClickVolumeMusiquePlus = () => {
        props.setCurrentTime(props.musiqueAmbiance.currentTime);
        props.volumeMusiquePlus();
    };

    const handleClickVolumeMusiqueMoin = () => {
        props.setCurrentTime(props.musiqueAmbiance.currentTime);
        props.volumeMusiqueMoin();
    };

    const handleClickVolumeExplosionPlus = () => {
        props.setCurrentTime(props.musiqueAmbiance.currentTime);

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
        props.setCurrentTime(props.musiqueAmbiance.currentTime);

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
        props.setCurrentTime(props.musiqueAmbiance.currentTime);

        props.musiqueAmbiance.pause();
        props.newPage('home');

    };

    const handleClickRejouer = () => {
        musiqueAmbiance.pause();
        props.newPage('localPVP');
        resetMenu();
        bombReset();
        persoReset(persosLocalReset.persosLocal.map(perso => {
            const playerBomb = {
                bombeMax: perso.playerBomb.bombeMax,
                timer: perso.playerBomb.timer,
            };
            return {
                ...perso,
                playerBomb: playerBomb,
            };
        }));
    };

    useEffect(() => {
        if (!musiqueAmbiance) {
            const musique = new Audio('/son/Lost_In_The_Dawn.mp3');
            setMusique(musique);
        }else {
            if (musique){
            musiqueAmbiance.play();
            musiqueAmbiance.loop = true;
            }
        }
    },[musiqueAmbiance, musique, setMusique]);

    const volumeMusique = props.volumeMusique * 10;
    const volumeExplosion = props.volumeExplosion * 10;

    const victoire = () => {
        if (persos.length === 0){
            return 'Match Nule!';
        }
        return 'Victoire!'
    }

    return (
        <StyledMusique>
            <div
                className="icon"
                onClick={handleMenu}    
            />

            { pause && !finDePartie &&
                <div className="fondNoir">
                    <div
                        className="menuModal"
                    >
                        <h2>Menu Options</h2>
                        <ul>
                            <li><h3>Musique</h3>
                                <ul>
                                    <li className="optionText">
                                        Volume Musique:
                                        <button className="buttonVolume" onClick={handleClickVolumeMusiqueMoin}>
                                            -
                                        </button>
                                        <button className="buttonVolume" onClick={handleClickVolumeMusiquePlus}>
                                            +
                                        </button>
                                        <span className="volume">
                                            {volumeMusique}/10
                                        </span>
                                    </li>
                                    <li className="optionText">
                                        Volume Explosion:
                                        <button className="buttonVolume" onClick={handleClickVolumeExplosionMoin}>
                                            -
                                        </button>
                                        <button className="buttonVolume" onClick={handleClickVolumeExplosionPlus}>
                                            +
                                        </button>
                                        <span className="volume">
                                            {volumeExplosion}/10
                                        </span>
                                    </li>
                                </ul>
                            </li>
                            <li className="buttonMenu"><button onClick={handleClickMenuPrincipal}>Revenir au menu principal</button></li>
                            <li className="buttonMenu"><button onClick={handleMenu}>Retour au jeu</button></li>
                        </ul>
                        
                    </div>
                </div>
            }

            {finDePartie && 
                <div
                        className="menuModal"
                    >
                        <h2>{victoire()}</h2>

                        <p>Il vous a fallu {totaleBombe} bombes!</p>

                        <button onClick={handleClickMenuPrincipal}>Revenir au menu principal</button>
                        <button onClick={handleClickRejouer}>Rejouer</button>
                        
                    </div>
            }
        </StyledMusique>
    );
};

export default Musique;