import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import StyledGame from './StyledGame';

import persosLocalReset from 'datas/persoLocal';

import useInterval from 'functions/useInterval';
import gestionPersoLocal from 'functions/gestionPersoLocal';
import gestionBombes from 'functions/gestionBombes';

import Perso from './Perso';
import Bombes from './Bombes';



const Game = (props) => {
    const {
        persoActif,
        maj,
        bombes,
        newBomb,
        reducerMajBomb,
        keyInput,
        newGameBomb,
        newGamePerso,
        bombeExplose,
        endGame,
    } = props;
   

    useInterval(() => {
        if (!props.pause) {
            // console.log("=========NEW TILT============");
            // Interval de temps. C'est ici que la boucle logique s'effectue.
            
            const majBomb = [];
            const compteurBombe = []; // Sert à compter les bombes désactivé pour les rendre aux jouerus

            Object.values(bombes.bombes).forEach((bombe) => {
                const bombeMiseAJour = gestionBombes(bombe);
                if (bombeMiseAJour && bombeMiseAJour.active) {
                    majBomb.push(bombeMiseAJour);
                }else {
                    compteurBombe.push(bombeMiseAJour);
                }
            });

            reducerMajBomb(majBomb);
            

            //=======================MAJ des perso======================
            // Pour chaque personnage, on créé un objet "image" avec les valeurs mise à jours.
            // Ce sont ces valeurs qui sont transmises au reducer de redux.
            const majPerso = [];
            Object.values(persoActif).forEach(perso => {

                // if(perso.localId === 0) {
                //     console.log(perso.playerBomb.bombeMax);
                // }

                // console.log('JOUEUR: ', perso.localId);
                let nouvelleBombe = 0;
                compteurBombe.forEach((bombeDesactive) => {
                    if (bombeDesactive === perso.localId) {
                        nouvelleBombe +=1;
                    }
                })
                const persoAjour = gestionPersoLocal(perso, keyInput, newBomb, (bombes.totalBombe + Math.random()), nouvelleBombe);
                if (persoAjour.actif) {
                    majPerso.push(persoAjour);
                }
            });


            // =====================MAJ des mort=================
            //  On récupère les données mises à jours et on regarde si des bombes on tué des joueurs ou explosé d'autre bombes:

            // Pour chaque bombe qui explose:

            Object.values(majBomb).forEach((bombe) => {
                if(bombe.danger){
                    // On vérifie si un joueurs se trouve à proximité:
                    const bombeX = bombe.posX;
                    const bombeY = bombe.posY;
                    const bombeWidth = 7.5; // bombe width = 15/2;
                    const bombeHeightTop = -12;
                    const bombeHeightBottom = 2;

                    Object.values(majPerso).forEach((perso)=>{
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

                    // On vérifi ensuite si d'autre bombes se trouve dans l'explosion:

                    Object.values(majBomb).forEach((bombe2) => {
                        const bombe2X = bombe2.posX;
                        const bombe2Y = bombe2.posY;
                        if (bombe2X > bombeX- bombeWidth && bombe2X < bombeX + bombeWidth){
                            if (bombe2Y > bombeY + bombeHeightTop && bombe2Y < bombeY + bombeHeightBottom)
                            {
                                if(!bombe2.explosion) {
                                    bombeExplose(bombe2.id);
                                }
                            }
                        }
                    });
                }
            });

            maj(majPerso);

            if (majPerso.length <= 1){
                endGame();
            }
        }


    }, 25); // ==============> nombre de miliseconde entre chaque frame (ideal 25)

    useEffect(() => {
        newGameBomb();
        console.log(persosLocalReset.persosLocal);
        newGamePerso(persosLocalReset.persosLocal.map(perso => {
            const playerBomb = {
                bombeMax: perso.playerBomb.bombeMax,
                timer: perso.playerBomb.timer,
            };
            return {
                ...perso,
                playerBomb: playerBomb,
            };
        }));
    }, [newGameBomb, newGamePerso]);


    return (
        <StyledGame>
            {   // On affiche les persos
                persoActif &&
                persoActif.map((perso)=>(
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
    persoActif: PropTypes.array.isRequired,
    bombes: PropTypes.object.isRequired,
    maj: PropTypes.func.isRequired,
};

export default Game;