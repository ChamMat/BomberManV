import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import { changePage, loadReady } from 'actions/menu';
import { changeInput } from 'actions/keyInput'
import App from '../App';


// == Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
const mapStateToProps = (state) => {
  return ({
  page: state.menu.page,
  loadReady: state.menu.fichierCharger,
})};

// == Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = (dispatch) => ({
  newPage: (value) => {
    dispatch(changePage(value))
  },
  newKeyInput: (key, value) => {
    dispatch(changeInput(key, value));
  },
  setLoadReady: (value) => {
    dispatch(loadReady(value));
  },
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
