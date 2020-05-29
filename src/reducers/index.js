import { combineReducers } from 'redux';

import demoReducer from './perso';

const rootReducer = combineReducers({
  perso: demoReducer,
  // ... autres reducers
});

export default rootReducer;
