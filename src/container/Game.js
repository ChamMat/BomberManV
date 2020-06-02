import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import { majPersos } from 'actions/majPerso';
import { changeInput } from 'actions/keyInput'
import Game from 'components/Game/index';


// == Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
const mapStateToProps = (state) => {
  return ({
  persosLocal: state.perso.persosLocal,
  keyInput: state.keysInput,
})};

// == Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = (dispatch) => ({
  maj: (persosLocal) => {
    dispatch(majPersos(persosLocal));
  },
  newKeyInput: (key, value) => {
    dispatch(changeInput(key, value));
  },
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const GameContainer = connect(mapStateToProps, mapDispatchToProps)(Game);

export default GameContainer;
