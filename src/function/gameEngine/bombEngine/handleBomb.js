import colision from 'function/gameEngine/handlePlatformColision';
import platforms from 'datas/platformsPvp';

const handleBomb = (gameDatas, setNewBomb, bombId, volume) => {
    const {
        players,
        bombs,
        totalBomb
    } = gameDatas;

    let newPLayers = players;
    let newBomb = [];
    let newTotalBomb = totalBomb;

        bombs.forEach((bomb)=>{
            if (bomb.active){

                const bombColision = colision(bomb.posX, bomb.posY, 3, 3, platforms, 2);
                if (bombColision[0]==='foot'){
                    bomb.posY = bombColision[1] -3;
                    bomb.chute = false;
                }

                if (bomb.chute){
                    bomb.posY += 2;
                }
                if (bomb.timer > 0){
                    bomb.timer -= 40;
                    bomb.action = 'idle';
                }else{
                    if (bomb.nbrImg < 5) {
                        bomb.danger = true;
                    };
                    bomb.action = 'explode';
                    if (!bomb.bombBlast){
                        bomb.bombBlast = true;
                        const bombBlastEffect = new Audio('audio/sound/bombBlast.flac');
                        bombBlastEffect.volume = volume;
                        bombBlastEffect.play();
                    }
                }
                newBomb.push(bomb);
            }
        });

        newPLayers = newPLayers.map((perso)=>{
            if (perso.down){
                newBomb.push({
                    id: parseInt(newTotalBomb) + parseInt(Math.random()),
                    idPerso: perso.id,
                    posX: perso.posX + 0.5,
                    posY: perso.posY +2,
                    timer: perso.timer,
                    active: true,
                    action: 'idle',
                    nbrImg: 0,
                    tempoImg: 0,
                    imageSrc: '',
                    bombBlast: false,
                    chute: true,
                    danger: false,
                });

                newTotalBomb +=1;
            }
            return perso;
        });

        newBomb.forEach((bomb) => {
            if (bomb.danger){
                const bombeX = bomb.posX;
                const bombeY = bomb.posY;
                const bombeWidth = 5.5;
                const bombeHeightTop = -12;
                const bombeHeightBottom = 2;
                newPLayers = newPLayers.map((perso) => {
                    if (perso.action !== 'mort'){
                        const persoX = perso.posX;
                        const persoY = perso.posY;

                        if (persoX > bombeX- bombeWidth && persoX < bombeX + bombeWidth){
                            if (persoY > bombeY + bombeHeightTop && persoY < bombeY + bombeHeightBottom)
                            {
                                return {
                                    ...perso,
                                    action: 'mort',
                                }
                            }   
                        }   
                    }
                    return perso;
                })
                newBomb = newBomb.map((otherBomb) => {
                    if (otherBomb.action !== 'exploode'){
                        const otherBombX = otherBomb.posX;
                        const otherBombY = otherBomb.posY;

                        if (otherBombX > bombeX- bombeWidth && otherBombX < bombeX + bombeWidth){
                            if (otherBombY > bombeY + bombeHeightTop && otherBombY < bombeY + bombeHeightBottom)
                            {
                                return {
                                    ...otherBomb,
                                    action: 'explode',
                                    timer: 0,
                                }
                            }   
                        }   
                    }
                    return otherBomb;
                })
                
            }
        });

    return {
        players: newPLayers,
        bombs: newBomb,
        totalBomb: newTotalBomb,
    }

};

export default handleBomb;