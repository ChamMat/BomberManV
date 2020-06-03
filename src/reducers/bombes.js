// Action Types
import { NEW_BOMB, MAJ_BOMB } from '../actions/bomb';

// Initial State
const initialState = {
    bombes:[]
};

// Reducer
const bombesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case NEW_BOMB:
      return {
        ...state,
        bombes: [ ...state.bombes, action.value],
      };
    case MAJ_BOMB:
      return {
        ...state,
        bombes: action.newTab,
      };
    default:
      return state;
  }
};

export default bombesReducer;