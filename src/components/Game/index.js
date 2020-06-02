import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import StyledGame from './StyledGame';

import useInterval from 'functions/useInterval';
import gestionPersoLocal from 'functions/gestionPersoLocal';

import Perso from './Perso';
import { createPortal } from 'react-dom';



const Game = (props) => {
    const {
        persosLocal,
        maj,
        newKeyInput,
    } = props;

    const handleKeyDown = (evt) => {
        let key;
        let value;

        switch (evt.code) {
            case 'ArrowUp':
                key = 'p1Up';
                value = true;
                newKeyInput(key, value);
            break;
            case 'ArrowLeft':
                key = 'p1Left';
                value = true;
                newKeyInput(key, value);
            break;
            case 'ArrowRight':
                key = 'p1Right';
                value = true;
                newKeyInput(key, value);
            break;
            case 'KeyP':
                key = 'p1Bomb';
                value = true;
                newKeyInput(key, value);
            break;
            case 'KeyR':
                key = 'p2Up';
                value = true;
                newKeyInput(key, value);
            break;
            case 'KeyD':
                key = 'p2Left';
                value = true;
                newKeyInput(key, value);
            break;
            case 'KeyG':
                key = 'p2Right';
                value = true;
                newKeyInput(key, value);
            break;
            case 'KeyA':
                key = 'p2Bomb';
                value = true;
                newKeyInput(key, value);
            break;
            default:
        }
    };
    
    const handleKeyUp = (evt) => {
        let key;
        let value;

        switch (evt.code) {
            case 'ArrowUp':
                key = 'p1Up';
                value = false;
                newKeyInput(key, value);
            break;
            case 'ArrowLeft':
                key = 'p1Left';
                value = false;
                newKeyInput(key, value);
            break;
            case 'ArrowRight':
                key = 'p1Right';
                value = false;
                newKeyInput(key, value);
            break;
            case 'KeyP':
                key = 'p1Bomb';
                value = false;
                newKeyInput(key, value);
            break;
            case 'KeyR':
                key = 'p2Up';
                value = false;
                newKeyInput(key, value);
            break;
            case 'KeyD':
                key = 'p2Left';
                value = false;
                newKeyInput(key, value);
            break;
            case 'KeyG':
                key = 'p2Right';
                value = false;
                newKeyInput(key, value);
            break;
            case 'KeyA':
                key = 'p2Bomb';
                value = false;
                newKeyInput(key, value);
            break;
            default:
        }
    };


    useInterval(() => {
        // Interval de temps. C'est ici que la boucle logique s'effectue.

        //=======================MAJ des perso======================
        // Pour chaque personnage, on créé un objet "image" avec les valeurs mise à jours.
        // Ce sont ces valeurs qui sont transmises au reducer de redux.
        const majPerso = [];
        Object.values(persosLocal).forEach(perso => {
            majPerso.push(gestionPersoLocal(perso, props.keyInput))
        });
        maj(majPerso);

    }, 50); // ==============> nombre de miliseconde entre chaque frame (ideal 100)

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
      },[]);

    return (
        <StyledGame>
            {   // On affiche les persos
                persosLocal.map((perso)=>(
                    <Perso
                        key={perso.localId}
                        datas={perso}
                    />
                ))
            }
            
        </StyledGame>
    )
};

Game.propTypes = {
    persosLocal: PropTypes.array.isRequired,
    maj: PropTypes.func.isRequired,
};

export default Game;