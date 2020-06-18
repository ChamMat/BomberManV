import { connect } from 'react-redux';

import MusicManager from 'components/MusicManager/MusicManager';

import { music, sound, menuOpen } from 'actions/gameSettings.action';


const mapStateToProps = (state) => {
    return ({
      gameStyle: state.gameSettings.gameStyle,
      gameReady: state.preLoader.gameReady,
      mercuryMusic: state.gameSettings.music.mercury,
      mainBossMusic: state.gameSettings.music.mainBoss,
      bossIntroMusic: state.gameSettings.music.bossIntro,
      musicVolume: state.gameSettings.volumeMusic,
    })
};

const mapDispatchToProps = (dispatch) => ({
  setNewMusic: (name, value) => {
    dispatch(music(name, value));
  },
  setNewEffectSound: (name, value) => {
    dispatch(sound(name, value));
  },
  setStateMenu: () => {
    dispatch(menuOpen());
  }
});

const MusicManagerContainer = connect(mapStateToProps, mapDispatchToProps)(MusicManager);

export default MusicManagerContainer;
