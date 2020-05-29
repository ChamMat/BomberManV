// Action Types
import { DO_SOMETHING } from '../actions/demo';

// Initial State
const initialState = {
  message: 'hello',
  posX: 50,
  posY: 50,
};

// Reducer
const demoReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case DO_SOMETHING:
      return {
        ...state,
        message: action.message,
      };

    default:
      return state;
  }
};

export default demoReducer;
