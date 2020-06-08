// Action Types
import { NEW_BONUS, BONUS_POSY, RESET_BONUS } from '../actions/bonusAction';

// Initial State
const initialState = {
  bonus: {},
};

// Reducer
const bonusReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case NEW_BONUS:
      return {
        ...state,
        bonus: action.value,
      };
    case BONUS_POSY:
      return {
        ...state,
        bonus: {...state.bonus, posY: state.bonus.posY +.2 },
      }
    case RESET_BONUS:
      return {
        ...state,
        bonus: {...state.bonus, actif: false},
      }
    default:
      return state;
  }
};

export default bonusReducer;

// contents: state.contents.map(
//   (content, i) => i === 1 ? {...content, text: action.payload}
//                           : content
// )