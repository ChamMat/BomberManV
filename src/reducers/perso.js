// Action Types
import { MAJ_PERSOS, RESET } from '../actions/majPerso';

// Initial State
const initialState = {
  persoActif: [],
};

// Reducer
const persoReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case MAJ_PERSOS:
      return {
        ...state,
        persoActif: action.persoActif,
      };
    case RESET:
      return {
        ...state,
        persoActif: action.value,
      };
    default:
      return state;
  }
};

export default persoReducer;

// contents: state.contents.map(
//   (content, i) => i === 1 ? {...content, text: action.payload}
//                           : content
// )