import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import Game from 'components/Game/index';

// == Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
const mapStateToProps = (state) => {
  return ({
  perso1: state.perso.perso1,
  perso2: state.perso.perso2,
})};

// == Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = {};

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const GameContainer = connect(mapStateToProps, mapDispatchToProps)(Game);

export default GameContainer;
