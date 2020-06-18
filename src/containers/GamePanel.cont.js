import { connect } from 'react-redux';

import GamePanel from 'components/GamePanel/GamePanel';

const mapStateToProps = (state) => {
    return ({
        gameStyle: state.gameSettings.gameStyle,
        gameReady: state.preLoader.gameReady,
        menuOpen: state.gameSettings.menuOpen,
    })
};

const mapDispatchToProps = {};

const GamePanelContainer = connect(mapStateToProps, mapDispatchToProps)(GamePanel);

export default GamePanelContainer;
