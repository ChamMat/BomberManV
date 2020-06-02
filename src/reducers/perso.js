// Action Types
import { MAJ_PERSOS } from '../actions/majPerso';

// Initial State
const initialState = {
  persosLocal: [
    {
      localId:0,
      posX: 20,
      posY: 80,
      direction: 'right',
      idle: true,
      walk: false,
      jump: false,
      idleImg: 'idle0',
      walkImg: 'walk0',
      tempo:0,
      keys: {
        up: false,
        left: false,
        right: false,
        bomb: false,
      }
    },
    {
      localId:1,
      posX: 30,
      posY: 80,
      direction: 'right',
      idle: true,
      walk: false,
      jump: false,
      idleImg: 'idle0',
      walkImg: 'walk0',
      tempo:0,
      keys: {
        up: false,
        left: false,
        right: false,
        bomb: false,
      }
    }
  ],
};

// Reducer
const persoReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case MAJ_PERSOS:
      return {
        ...state,
        persosLocal: action.persosLocal,
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