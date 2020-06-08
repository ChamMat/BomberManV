import { combineReducers } from 'redux';

import persoReducer from './perso';
import keyInputReducer from './keysReducer';
import bombesReducer from './bombes';
import menuReducer from './menuReducer';
import bonusReducer from './bonusReducer';

const rootReducer = combineReducers({
  perso: persoReducer,
  keysInput: keyInputReducer,
  bombes: bombesReducer,
  menu: menuReducer,
  bonus:bonusReducer,
  // ... autres reducers
});

export default rootReducer;
