import { combineReducers } from 'redux';

import preLoaderReducer from './preLoader.reducer';
import gameSettingsReducer from './gameSettings.reducer';
import gameDatasReducer from './gameDatas.reducer';
import keyboardReducer from './keyBoardInput.reducer';

const rootReducer = combineReducers({
    preLoader: preLoaderReducer,
    gameSettings: gameSettingsReducer,
    gameDatas: gameDatasReducer,
    keyboard: keyboardReducer,
  // ... autres reducers
});

export default rootReducer;
