import React, { useEffect } from 'react';
import PvpStyled from './PvpStyled';

import pvpLocalDatas from 'datas/persoLocal';
import platforms from 'datas/platformsPvp';

import useInterval from 'function/useInterval';
import handleAnimatePersos from 'function/gameEngine/persoEngine/handleAnimatePersos'
import handleLocalKey from 'function/gameEngine/handleLocalKey';
import handleMovePerso from 'function/gameEngine/persoEngine/handleMovePerso';
import handleBomb from 'function/gameEngine/bombEngine/handleBomb';
import handleAnimateBomb from 'function/gameEngine/bombEngine/handleAnimateBomb';

import Perso from 'components/Perso/Perso';
import Bomb from 'components/Bomb/Bomb';
import Bonus from 'components/Bonus/index';
import GameOver from 'components/GameOver/GameOver';

const Pvp = (props) => {
    const {
        majPerso,
        gameStyle,
        gameDatas,
        keyBoardInput,
        setKeyInput,
        setNewBomb,
        bombId,
        volume,
        bonus,
        setNewBonus,
        setBonusReset,
        endGame,
        gameOver,
        setGameStyle,
    } = props;

    const random = (max, min) => {
        const rand= Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) +1)) + Math.ceil(min);
        return rand;
    }

    const handleTouchStart = (evt) => {
        setKeyInput(evt.target.name, true);
      }
    
    const handleTouchEnd = (evt) => {
    setKeyInput(evt.target.name, false);
    }


    useInterval(()=>{
        let newGameDatas = {
            // players: [...gameDatas.players],
            bombs: [...gameDatas.bombs],
            totalBomb: gameDatas.totalBomb,
        };

        newGameDatas.players = [];

        gameDatas.players.forEach((players) => {
            if (players.actif){
                newGameDatas.players.push(players);
            }
        })

        if(newGameDatas.players.length > 1 && !endGame){

            if (!bonus.actif){
                if(random(100, 1) === 1) { // Si la valeur est égale à 1, on génére un bonus à se tilt.

                    //On sélectionne aléatoirement la plateforme sur laquel le bonus va se poser

                    const selectedPlatform = random(platforms.platforms.length-1, 0);
                    //Une fois la plateforme séléctionné, on selectionne une position aléatoire sur X
                    const selectedPlatformMinX = platforms.platforms[selectedPlatform].left;
                    const selectefPlatformMaxX = parseInt(selectedPlatformMinX) + parseInt(platforms.platforms[selectedPlatform].width);

                    const bonusWidth = 2.5;
                    const platformHeight= 3;
                    let bonusPosX = parseInt(random(selectefPlatformMaxX,selectedPlatformMinX)) - bonusWidth/2;
                    let bonusPosY = platforms.platforms[selectedPlatform].top - platformHeight;

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

            // UpLoad localPLayer keyInput
            if(gameStyle === "localPvp") {
                newGameDatas.players = handleLocalKey(newGameDatas.players, keyBoardInput);
                setKeyInput('ArrowUp', false, true);
                setKeyInput('KeyW', false, true);
                setKeyInput('ArrowDown', false, true);
                setKeyInput('KeyS', false, true);
            }

            newGameDatas.players = handleMovePerso(newGameDatas.players, bonus, setBonusReset, volume );
            newGameDatas = handleBomb(newGameDatas, setNewBomb, bombId, volume);

            // Handle the animation with the new datas
            newGameDatas.players = handleAnimatePersos(newGameDatas.players);
            newGameDatas.bombs = handleAnimateBomb(newGameDatas.bombs);


            majPerso(newGameDatas);
        }else {
            if (gameDatas.players){
                gameOver(true);
                return false;
            }
        }

                
    }, 25);

    useEffect(()=>{
        majPerso({
            players:pvpLocalDatas,
            bombs: [],
            totalBomb: 0,

        })
    },[gameStyle, majPerso])


    return (
        <PvpStyled>
        {   
            gameDatas.players.map((perso)=>{
                return(
                    <Perso
                        key={perso.id}
                        datas={perso}
                    />
            )})
        }
        {
            gameDatas.bombs.map((bomb)=>{
                return(
                    <Bomb
                        key={bomb.id}
                        datas={bomb}
                    />
            )})
        }

        { bonus.actif &&
                <Bonus props={bonus} />
        }
        <div className="buttonsMobil">
          <div className="buttonMobilWrapper">
            <div className="buttonDirection">
              <button
                className="buttonMobil buttonLeft"
                name = "ArrowLeft"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              />
              <button
                className="buttonMobil buttonRight"
                name = "ArrowRight"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              />
            </div>
            <div className="buttonAction">
              <button
                className="buttonMobil buttonAction"
                name = "ArrowDown"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              />
              <button
                className="buttonMobil buttonJump"
                name = "ArrowUp"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              />
            </div>
          </div>
        </div>
        { endGame &&
            <GameOver
                players={gameDatas}
                majPerso={majPerso}
                pvpLocalDatas={pvpLocalDatas}
                setBonusReset={setBonusReset}
                setGameStyle={setGameStyle}
                gameOver={gameOver}
            />
        }
        </PvpStyled>
    );
}

export default Pvp;