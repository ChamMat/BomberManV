import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import { majPersos, resetPerso } from 'actions/majPerso';
import {
  setNewBomb,
  majBomb,
  resetBombe,
  explose,
} from 'actions/bomb';
import Game from 'components/Game/index';


// == Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
const mapStateToProps = (state) => {
  return ({
  persosLocal: state.perso.persosLocal,
  keyInput: state.keysInput,
  bombes: state.bombes,
  pause: state.menu.pause,
})};

// == Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = (dispatch) => ({
  maj: (persosLocal) => {
    dispatch(majPersos(persosLocal));
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
  }
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const GameContainer = connect(mapStateToProps, mapDispatchToProps)(Game);

export default GameContainer;
