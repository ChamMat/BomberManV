import { connect } from 'react-redux';

import GameMenu from 'components/GameMenu/GameMenu'

import { changeVolume, menuOpen, gameStyle } from 'actions/gameSettings.action';

const mapStateToProps = (state) => {
    return(
        {
            musicVolume: state.gameSettings.volumeMusic,
            effectVolume: state.gameSettings.volumeEffect,
        }
    )
};

const mapDispatchToProps = (dispatch) => ({
    newVolume: (songType, songVolume) => {
        dispatch(changeVolume(songType, songVolume));
    },
    setStateMenu: () => {
        dispatch(menuOpen());
    },
    setGameStyle: (value) => {
        dispatch(gameStyle(value));
    },
});

const GameMenuContainer = connect(mapStateToProps, mapDispatchToProps)(GameMenu);

export default GameMenuContainer;