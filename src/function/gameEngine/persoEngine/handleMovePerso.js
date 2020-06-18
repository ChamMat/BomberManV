import handlePlatformColision from 'function/gameEngine/handlePlatformColision';
import handleJump from 'function/gameEngine/persoEngine/handleJump';
import platforms from 'datas/platformsPvp';

const handleMovePerso = (persosDatas, bonus, bonusReset, volume) => {
            
    return persosDatas.map((perso) => {
        let {
            actif,
            posX,
            posY,
            direction,
            vitesse,
            action,
            left,
            right,
            up,
            nbrImg,
            tempoImg,
            powerJump,
            jumpPause,
            bombMax,
        } = perso;

        let newBombMax = bombMax;
        let newVitesse = vitesse;
        let newActif = actif;
        let newPosX = posX;
        let newPosY = posY;
        let newDirection = direction;
        let newAction = action;
        let chute = true;
        let newTempoImg = tempoImg;
        let newNbrImg = nbrImg;
        let newPowerJump = powerJump;
        let newJumpPause = jumpPause;

        if (perso.action !== 'mort'){
            
            const gravite = 2;

            const colision = handlePlatformColision(posX, posY, 5 , 5, platforms, gravite); // 5 is height and width
            // Waiting ['none', 0] if no colision else, ['foot' || 'head', posY where colision is do]
            if (colision[0]==='foot'){
                newPosY = colision[1]-5; //Replace the perso on the platform (-5 because of height of the perso)
                chute = false;
                newPowerJump = 0;
            }

            if (colision[0]==='head'){
                if (newPowerJump > 2){
                    newPowerJump = 2;
                }
            }

            if (left || right){
                newAction = 'walk';
                if (left){
                    newDirection = 'left';
                    newPosX -= vitesse;
                }
                if (right){
                    newDirection = 'right';
                    newPosX += vitesse;
                }
            }

            newPowerJump = handleJump(newPowerJump, up, chute);

            
            if (chute || newPowerJump > gravite) {
                newPosY += gravite - newPowerJump;
                newAction = 'jump';
            }

            if (!left && !right && !chute){
                newAction = 'idle';
            }

            if (newPosX < 1){
                newPosX = 1;
            }
            if (newPosX > 95){
                newPosX = 95;
            }


            if (action !== newAction){ // Au cas ou on change d'action, on reset les images
                newTempoImg = 0;
                newNbrImg = 0;
            }

            // GESTION DES BONUS
        const bPosX = bonus.posX;
        const bPosY = bonus.posY;
        const bWidth = 2.5;
        const bHeight = 3;
        

        if (bonus.actif) {
            if (posX + 5 > bPosX && posX < bPosX + bWidth){
                if ( posY + 5 > bPosY && posY < bPosY + bHeight){

                    
                    if (bonus.bonusType === 'bombBonus') {
                        newBombMax += 1;
                        const bonusSon = new Audio('audio/sound/bombBonusSound.wav');
                        if (volume <= .4) {
                            volume = .4;
                        }
                        bonusSon.volume = volume-.4;
                        bonusSon.play();
                    }
                    if (bonus.bonusType === 'speedBonus') {
                        const bonusSon = new Audio('audio/sound/speedBonusSound.wav');
                        if (volume <= .4) {
                            volume = .4;
                        }
                        bonusSon.volume = volume-.4;
                        bonusSon.play();
                        newVitesse += .05;
                        if (newVitesse > .9) {
                            newVitesse = .9;
                        }
                    }
                    bonusReset();
                }
            }
        }


        }else {
            if (perso.nbrImg === 7) {
                newActif = false;
            };
        }


        return {
            ...perso,
            vitesse: newVitesse,
            bombMax: newBombMax,
            actif: newActif,
            posX: newPosX,
            posY: newPosY,
            direction: newDirection,
            action: newAction,
            nbrImg: newNbrImg,
            tempoImg: newTempoImg,
            powerJump: newPowerJump,
            jumpPause: newJumpPause,
            up: false,
        }
    })
};

export default handleMovePerso;