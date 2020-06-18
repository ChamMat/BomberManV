import { connect } from 'react-redux';

import Home from 'components/Home/Home';

import { gameReady } from 'actions/preLoader.action';
import { gameStyle } from 'actions/gameSettings.action';


const mapStateToProps = (state) => {
    return ({
        imageLoad: state.preLoader.imageLoad,
        audioLoad: state.preLoader.audioLoad,
        gameReady: state.preLoader.gameReady,
    })
};

const mapDispatchToProps = (dispatch) => ({
    gameIsReady: () => {
        dispatch(gameReady());
    },
    setGameStyle: (value) => {
      dispatch(gameStyle(value));
    }

});

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
