import { combineReducers } from 'redux';

import persoReducer from './perso';
import keyInputReducer from './keysReducer';

const rootReducer = combineReducers({
  perso: persoReducer,
  keysInput: keyInputReducer,
  // ... autres reducers
});

export default rootReducer;
