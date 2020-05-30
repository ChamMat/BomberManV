// Action Types
import { DO_SOMETHING } from '../actions/demo';

// Initial State
const initialState = {
  perso1: {
    posX: 20,
    posY: 80,
    direction: 'right',
  },
  perso2: {
    posX: 80,
    posY: 80,
    direction: 'left',
  }
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
