import { combineReducers } from 'redux';

import persoReducer from './perso';

const rootReducer = combineReducers({
  perso: persoReducer,
  // ... autres reducers
});

export default rootReducer;
