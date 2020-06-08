import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import {
  pause,
  setAmbianceMusic,
  musiquePlus,
  musiqueMoin,
  explosionPlus,
  explosionMoin,
  changePage,
  saveCurrentTime,
  menuReset,
} from 'actions/menu';

import { resetBombe } from 'actions/bomb';
import { resetPerso } from 'actions/majPerso';
import { bonusReset } from 'actions/bonusAction';


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
  ambianceMusiqueCurrentTime: state.menu.musiquecurrentTime,
  finDePartie: state.menu.finDePartie,
  persos: state.perso.persoActif,
  totaleBombe: state.bombes.totalBombe,
  
})};

// == Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = (dispatch) => ({
  dispatchPause: () => {
    dispatch(pause());
  },

  setMusique: (music, value) => {
    dispatch(setAmbianceMusic(music, value))
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

  newPage: (value) => {
    dispatch(changePage(value))
  },

  setCurrentTime: (value) => {
    dispatch(saveCurrentTime(value))
  },

  resetMenu: () => {
    dispatch(menuReset())
  },

  bombReset: () => {
    dispatch(resetBombe())
  },

  persoReset: (value) => {
    dispatch(resetPerso(value))
  },

  setBonusReset: () => {
    dispatch(bonusReset())
  },

});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const MusiqueContainer = connect(mapStateToProps, mapDispatchToProps)(Musique);

export default MusiqueContainer;
