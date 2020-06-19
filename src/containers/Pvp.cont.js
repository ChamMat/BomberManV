import { connect } from 'react-redux';

import Pvp from 'components/Pvp/Pvp'

import { endGame, gameStyle } from 'actions/gameSettings.action';
import { keyInput } from 'actions/keyboardInput.action';

import {
    dataForMajPerso,
    newBomb,
    newBonus,
    bonusReset
} from 'actions/gameDatas.action';

const mapStateToProps = (state) => {
    return(
        {
            gameStyle: state.gameSettings.gameStyle,
            gameDatas: state.gameDatas,
            keyBoardInput: state.keyboard,
            bombId: state.gameDatas.totalBomb,
            volume: state.gameSettings.volumeEffect,
            bonus: state.gameDatas.bonus,
            endGame: state.gameSettings.endGame,
        }
    )
};

const mapDispatchToProps = (dispatch) => ({
    majPerso: (datas)=>{
        dispatch(dataForMajPerso(datas));
    },
    setKeyInput: (key, value, pauseActive) => {
        dispatch(keyInput(key, value, pauseActive));
    },
    setNewBomb: (bombObject) => {
        dispatch(newBomb(bombObject));
    },
    setNewBonus: (value) => {
        dispatch(newBonus(value));
    },
    setBonusReset: () => {
        dispatch(bonusReset());
    },
    gameOver: () => {
        dispatch(endGame());
    },
    setGameStyle: (value) => {
        dispatch(gameStyle(value));
    },
    setKeyInput: (key, value) => {
        dispatch(keyInput(key, value));
    },

});

const PvpContainer = connect(mapStateToProps, mapDispatchToProps)(Pvp);

export default PvpContainer;