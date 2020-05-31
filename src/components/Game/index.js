import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import StyledGame from './StyledGame';

import useInterval from 'functions/useInterval';
import gestionPersoLocal from 'functions/gestionPersoLocal';

import Perso from './Perso';

const handleKeyDown = (evt) => {
    // switch(evt.code){
    //     case 'ArrowUp':
    //         p1Up = true;
    //     break;
    // }
    console.log("keydown");
};

const handleKeyUp = (evt) => {
    // switch(evt.code){
    //     case 'ArrowUp':
    //         p1Up = false;
    //     break;
    // }
};

const Game = (props) => {
    const {
        persosLocal,
        persos,
        maj,
    } = props;

    let p1Up;
    let p1Left;
    let p1right;
    let p1Bomb;

    let p2Up;
    let p2Left;
    let p2right;
    let p2Bomb;


    useInterval(() => {
        // Interval de temps. C'est ici que la boucle logique s'effectue.

        //=======================MAJ des perso======================
        // Pour chaque personnage, on créé un objet "image" avec les valeurs mise à jours.
        // Ce sont ces valeurs qui sont transmises au reducer de redux.
        const majPerso = [];
        Object.values(persosLocal).forEach(perso => {
            majPerso.push(gestionPersoLocal(perso))
        });
        maj(majPerso);

    }, 1000); // ==============> nombre de miliseconde entre chaque frame        

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
      },[]);


    return (
        <StyledGame>
            {   // On affiche d'abord les perso locaux
                persosLocal.map((perso)=>(
                    <Perso
                        key={perso.id}
                        datas={perso}
                    />
                ))
            }

            {   // Ensuite, on affiche les perso 'exterieur'
                persos.map((perso)=>(
                    <Perso
                        key={perso.id}
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