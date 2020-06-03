// Action Types
import { NEW_BOMB, MAJ_BOMB } from '../actions/bomb';

// Initial State
const initialState = {
  totalBombe: 0, // Utilisé pour donner un id aux bombes
  bombes:[]
};

// Reducer
const bombesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case NEW_BOMB:
      return {
        ...state,
        bombes: [ ...state.bombes, action.value],
        totalBombe: state.totalBombe + 1,
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