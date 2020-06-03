// Action Types
import { NEW_BOMB } from '../actions/bomb';

// Initial State
const initialState = {
    bombes:[]
};

// Reducer
const bombesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case NEW_BOMB:
      console.log(action);
      return {
        ...state,
        bombes: [ ...state.bombes, action.value],
      };
    default:
      return state;
  }
};

export default bombesReducer;