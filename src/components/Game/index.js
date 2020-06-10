import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import StyledGame from './StyledGame';

import persosLocalReset from 'datas/persoLocal';

import useInterval from 'functions/useInterval';
import gestionPersoLocal from 'functions/gestionPersoLocal';
import gestionBombes from 'functions/gestionBombes';

import Perso from './Perso';
import Bombes from './Bombes';
import Bonus from 'container/Bonus'



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
        setNombreJoueur,
        nombreJoueur,
        setNewBonus,
        bonus,
        setBonusReset,
        platforms,
        volumeBombe,
    } = props;



   
    const random = (max, min) => {
        const rand= Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) +1)) + Math.ceil(min);
        return rand;
    }

    useInterval(() => {
        
        if (!props.pause && nombreJoueur > 0) {
            // console.log("=========NEW TILT============");
            // Interval de temps. C'est ici que la boucle logique s'effectue.
            if (!bonus.actif){
                if(random(100, 1) === 1) { // Si la valeur est égale à 1, on génére un bonus à se tilt.

                    //On sélectionne aléatoirement la plateforme sur laquel le bonus va se poser

                    const selectedPlatform = random (platforms.length-1, 0);
                    //Une fois la plateforme séléctionné, on selectionne une position aléatoire sur X
                    const selectedPlatformMinX = platforms[selectedPlatform].left;
                    const selectefPlatformMaxX = parseInt(selectedPlatformMinX) + parseInt(platforms[selectedPlatform].width);

                    const bonusWidth = 2.5;
                    const platformHeight= 3;
                    let bonusPosX = parseInt(random(selectefPlatformMaxX,selectedPlatformMinX)) - bonusWidth;
                    let bonusPosY = platforms[selectedPlatform].top - platformHeight;

                    const type = () => {
                        if(random(2,1) === 1) {
                            return 'bombBonus';
                        }
                        return 'speedBonus';
                    }

                    if (bonusPosX < 4) {
                        bonusPosX = 4;
                    }

                    if (bonusPosX > 93) {
                        bonusPosX = 93;
                    }
                    setNewBonus({
                        actif: true,
                        posX: bonusPosX,
                        posY: bonusPosY,
                        bonusType: type(),
                    })
                }
            }else {
                if (bonus.posY > 100) {
                    setBonusReset();
                }
            }
            
            const majBomb = [];
            const compteurBombe = []; // Sert à compter les bombes désactivé pour les rendre aux jouerus

            Object.values(bombes.bombes).forEach((bombe) => {
                const bombeMiseAJour = gestionBombes(bombe, volumeBombe);
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

                let nouvelleBombe = 0;
                compteurBombe.forEach((bombeDesactive) => {
                    if (bombeDesactive === perso.localId) {
                        nouvelleBombe +=1;
                    }
                })
                const persoAjour = gestionPersoLocal(
                    perso,
                    keyInput,
                    newBomb,
                    (bombes.totalBombe + Math.random()), // Pour généré une id unique => 1 chance sur 999999999 d'avoir un bug d'affichage non bloquan.
                    nouvelleBombe,
                    bonus,
                    setBonusReset,
                    volumeBombe,
                    );
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
                setBonusReset();
                endGame();
            }
        }


    }, 25); // ==============> nombre de miliseconde entre chaque frame (ideal 25)

    useEffect(() => {
        setBonusReset();
        newGameBomb();
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
        setNombreJoueur(persosLocalReset.persosLocal.length);
    }, [newGameBomb, newGamePerso, setNombreJoueur, setBonusReset]);

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

            { bonus.actif &&
                <Bonus />
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