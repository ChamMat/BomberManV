import { connect } from 'react-redux';

import MenuHome from 'components/MenuHome/MenuHome';

import { gameStyle } from 'actions/gameSettings.action';


const mapDispatchToProps = (dispatch) => ({
    setGameStyle: (value) => {
      dispatch(gameStyle(value));
    }

});

const MenuHomeContainer = connect(null, mapDispatchToProps)(MenuHome);

export default MenuHomeContainer;
