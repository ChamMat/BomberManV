// Action Types
import { MAJ_PERSOS } from '../actions/majPerso';

// Initial State
const initialState = {
  persosLocal: [
    {
      id:1,
      posX: 20,
      posY: 80,
      direction: 'right',
      idle: true,
      walk: false,
      jump: false,
      idleImg: 'idle0',
      walkImg: 'walk0',
      tempo:0,
    },
    {
      id:2,
      posX: 30,
      posY: 80,
      direction: 'right',
      idle: true,
      walk: false,
      jump: false,
      idleImg: 'idle0',
      walkImg: 'walk0',
      tempo:0,
    }
  ],
  persos: [
    {
      id:3,
      posX: 80,
      posY: 80,
      direction: 'left',
      idle: true,
      walk: false,
      jump: false,
      idleImg: 'idle0',
      walkImg: 'walk0',
      tempo:0,
    },
    {
      id:4,
      posX: 70,
      posY: 80,
      direction: 'left',
      idle: true,
      walk: false,
      jump: false,
      idleImg: 'idle0',
      walkImg: 'walk0',
      tempo:0,
    }
  ]
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
