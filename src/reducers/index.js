import { combineReducers } from 'redux';

import persoReducer from './perso';
import keyInputReducer from './keysReducer';
import bombesReducer from './bombes';

const rootReducer = combineReducers({
  perso: persoReducer,
  keysInput: keyInputReducer,
  bombes: bombesReducer,
  // ... autres reducers
});

export default rootReducer;
