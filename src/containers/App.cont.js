import { connect } from 'react-redux';

import App from 'App';

import { keyInput } from 'actions/keyboardInput.action';


const mapDispatchToProps = (dispatch) => ({
    setKeyInput: (key, value) => {
        dispatch(keyInput(key, value));
    },

});

const AppContainer = connect(null, mapDispatchToProps)(App);

export default AppContainer;
