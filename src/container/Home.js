import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import { changePage } from 'actions/menu';
import { setAmbianceMusic } from 'actions/menu';
import Home from 'components/Home/index';


// == Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
const mapStateToProps = (state) => {
  return ({
  page: state.menu.page,
  musiqueMenu: state.menu.musiqueMenu,
  volume: state.menu.volumeMusique,

})};

// == Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = (dispatch) => ({
  newPage: (value) => {
    dispatch(changePage(value))
  },
  setMusique: (music, value) => {
    dispatch(setAmbianceMusic(music, value))
  },
  
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
