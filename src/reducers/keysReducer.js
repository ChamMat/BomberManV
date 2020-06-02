// Action Types
import { MAJ_KEY_INPUT } from '../actions/keyInput';

// Initial State
const initialState = {
    p1Up:false,
    p1Left:false,
    p1Right:false,
    p1Bomb:false,
    p2Up: false,
    p2Left: false,
    p2Right: false,
    p2Bomb: false,
};

// Reducer
const keyInputReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case MAJ_KEY_INPUT:
      return {
        ...state,
        [action.key]: action.value,
      };
    default:
      return state;
  }
};

export default keyInputReducer;

// contents: state.contents.map(
//   (content, i) => i === 1 ? {...content, text: action.payload}
//                           : content
// )