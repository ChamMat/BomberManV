import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import StyledGame from './StyledGame';

import useInterval from 'functions/useInterval';
import gestionPersoLocal from 'functions/gestionPersoLocal';
import gestionBombes from 'functions/gestionBombes';

import Perso from './Perso';
import Bombes from './Bombes';



const Game = (props) => {
    const {
        persosLocal,
        maj,
        bombes,
        newKeyInput,
        newBomb,
        reducerMajBomb,
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
            case 'ArrowDown':
                key = 'p1Bomb';
                value = true;
                newKeyInput(key, value);
            break;
            case 'KeyW':
                key = 'p2Up';
                value = true;
                newKeyInput(key, value);
            break;
            case 'KeyA':
                key = 'p2Left';
                value = true;
                newKeyInput(key, value);
            break;
            case 'KeyD':
                key = 'p2Right';
                value = true;
                newKeyInput(key, value);
            break;
            case 'KeyS':
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
            case 'ArrowDown':
                key = 'p1Bomb';
                value = false;
                newKeyInput(key, value);
            break;
            case 'KeyW':
                key = 'p2Up';
                value = false;
                newKeyInput(key, value);
            break;
            case 'KeyA':
                key = 'p2Left';
                value = false;
                newKeyInput(key, value);
            break;
            case 'KeyD':
                key = 'p2Right';
                value = false;
                newKeyInput(key, value);
            break;
            case 'KeyS':
                key = 'p2Bomb';
                value = false;
                newKeyInput(key, value);
            break;
            default:
        }
    };


    useInterval(() => {

        if (!props.pause) {
            // console.log("=========NEW TILT============");
            // Interval de temps. C'est ici que la boucle logique s'effectue.

            const majBomb = [];

            bombes.bombes.map((bombe) => {
                const bombeMiseAJour = gestionBombes(bombe);
                if (bombeMiseAJour) {
                    majBomb.push(bombeMiseAJour);
                }
            });

            reducerMajBomb(majBomb);
            

            //=======================MAJ des perso======================
            // Pour chaque personnage, on créé un objet "image" avec les valeurs mise à jours.
            // Ce sont ces valeurs qui sont transmises au reducer de redux.
            const majPerso = [];
            Object.values(persosLocal).forEach(perso => {
                // console.log('JOUEUR: ', perso.localId);
                const persoAjour = gestionPersoLocal(perso, props.keyInput, newBomb, (bombes.totalBombe + Math.random()));
                if (persoAjour.actif) {
                    majPerso.push(persoAjour);
                }
            });

            // =====================MAJ des mort=================
            //  On récupère les données mises à jours et on regarde si des bombes on tué des joueurs:

            // Pour chaque bombe qui explose:

            majBomb.map((bombe) => {
                if(bombe.danger){
                    // On vérifie si un joueurs se trouve à proximité:
                    const bombeX = bombe.posX;
                    const bombeY = bombe.posY;
                    const bombeWidth = 7.5; // bombe width = 15/2;
                    const bombeHeightTop = -12;
                    const bombeHeightBottom = 2;

                    majPerso.map((perso)=>{
                        if (!perso.mort){
                            const persoX = perso.posX;
                            const persoY = perso.posY;

                                if (persoX > bombeX- bombeWidth && persoX < bombeX + bombeWidth){
                                if (persoY > bombeY + bombeHeightTop && persoY < bombeY + bombeHeightBottom)
                                {
                                    perso.mort = true;
                                }
                            }

                        }
                    })
                }
            });

            maj(majPerso);
        }


    }, 25); // ==============> nombre de miliseconde entre chaque frame (ideal 25)

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

            {   // On affiche les bombes
                bombes.bombes.map((bombe)=>{
                    return(
                    <Bombes
                        key={bombe.id}
                        datas={bombe}
                    />
                )})
            }


            
        </StyledGame>
    )
};

Game.propTypes = {
    persosLocal: PropTypes.array.isRequired,
    bombes: PropTypes.object.isRequired,
    maj: PropTypes.func.isRequired,
};

export default Game;