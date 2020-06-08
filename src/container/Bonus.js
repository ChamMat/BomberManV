import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import Bonus from 'components/Game/Bonus/index';
import { newBonus } from 'actions/bonusAction';


// == Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
const mapStateToProps = (state) => {
  return ({
      posX: state.bonus.bonus.posX,
      posY: state.bonus.bonus.posY,
      bonusType: state.bonus.bonus.bonusType,
})};

// == Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = (dispatch) => ({

});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const BonusContainer = connect(mapStateToProps, mapDispatchToProps)(Bonus);

export default BonusContainer;
