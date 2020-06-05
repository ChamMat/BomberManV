import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import {
  pause,
  setAmbianceMusic,
  musiquePlus,
  musiqueMoin,
  explosionPlus,
  explosionMoin,
} from 'actions/menu';

import Musique from 'components/Menu/index';


// == Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
const mapStateToProps = (state) => {
  return ({
  pause: state.menu.pause,
  musiqueAmbiance: state.menu.musiqueAmbiance,
  musique: state.menu.musique,
  volumeMusique: state.menu.volumeMusique,
  volumeExplosion: state.menu.volumeExplosion,
})};

// == Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = (dispatch) => ({
  dispatchPause: () => {
    dispatch(pause());
  },

  setMusique: (value) => {
    dispatch(setAmbianceMusic(value))
  },

  volumeMusiquePlus: () => {
    dispatch(musiquePlus())
  },

  volumeMusiqueMoin: () => {
    dispatch(musiqueMoin())
  },

  volumeExplosionPlus: () => {
    dispatch(explosionPlus())
  },

  volumeExplosionMoin: () => {
    dispatch(explosionMoin())
  },

});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const MusiqueContainer = connect(mapStateToProps, mapDispatchToProps)(Musique);

export default MusiqueContainer;
