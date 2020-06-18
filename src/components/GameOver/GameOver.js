import React from 'react';
import GameOverStyled from './GameOverStyled';

const GameOver = (props) => {

  const {
    majPerso,
    pvpLocalDatas,
    setBonusReset,
    setGameStyle,
  } = props;

  let winner = [];
    props.players.players.forEach((perso) => {
    if(perso.actif){
      if (perso.action !== 'mort')
      {
        winner.push(perso);
      }
    }
  })

  const message = () => {
    if (winner.length === 0 || winner.length > 1){
      return 'Match null!'
    }
    
    return `Congratulation ${winner[0].name}, you are the winner!`;
    
  }

  const soundClick = new Audio('audio/sound/menuClick.wav');

  const handleClickRestart = () => {
    soundClick.volume = .1;
    soundClick.play();
    setBonusReset();
    majPerso({
      players:pvpLocalDatas,
      bombs:[],
      totalBomb: 0,
    })
  };

  const handleClickBackHome = () => {
    soundClick.volume = .1;
    soundClick.play();
    setBonusReset();
    majPerso({
      players:pvpLocalDatas,
      bombs:[],
      totalBomb: 0,
    })
    setGameStyle('');

  }

    return (
        <GameOverStyled>
            <div className="GameOverWrapper">
                <h2>Game Over</h2>
                <div className="message">{ message() }</div>

                <ul>
                  <li><button className="button" onClick={handleClickRestart}>Restart</button></li>
                  <li><button className="button" onClick={handleClickBackHome}>Back home</button></li>
                </ul>

            </div>
        </GameOverStyled>
    );
};

export default GameOver;
