import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import { majPersos, resetPerso } from 'actions/majPerso';
import {
  setNewBomb,
  majBomb,
  resetBombe,
  explose,
} from 'actions/bomb';
import { finDePartie, nombreJoueur } from 'actions/menu';
import Game from 'components/Game/index';


// == Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
const mapStateToProps = (state) => {
  return ({
  persoActif: state.perso.persoActif,
  keyInput: state.keysInput,
  bombes: state.bombes,
  pause: state.menu.pause,
  nombreJoueur: state.menu.nombreJoueur,
})};

// == Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = (dispatch) => ({
  maj: (persoActif) => {
    dispatch(majPersos(persoActif));
  },
  newBomb: (value) => {
    dispatch(setNewBomb(value))
  },
  reducerMajBomb: (newTab) => {
    dispatch(majBomb(newTab))
  },
  newGameBomb: () => {
    dispatch(resetBombe())
  },
  newGamePerso: (value) => {
    dispatch(resetPerso(value))
  },
  bombeExplose: (id) => {
    dispatch(explose(id))
  },
  endGame: () => {
    dispatch(finDePartie())
  },
  setNombreJoueur: (value) => {
    dispatch(nombreJoueur(value));
  }
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const GameContainer = connect(mapStateToProps, mapDispatchToProps)(Game);

export default GameContainer;
