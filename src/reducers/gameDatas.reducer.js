// Action Types
import {
    NEW_GAME,
    NEW_BOMB,
    NEW_BONUS,
    RESET_BONUS,
  } from '../actions/gameDatas.action';
  
  // Initial State
  const initialState = {
    players: [],
    bombs:[],
    totalBomb: 0,
    bonus:{},
  };
  
  // Reducer
  const gameDatasRecucer = (state = initialState, action = {}) => {

    switch (action.type) {

      case NEW_GAME:
        return {
          ...state,
          players: action.datas.players,
          bombs: action.datas.bombs,
          totalBomb: action.datas.totalBomb,
        };

      case NEW_BOMB:
        return {
          ...state,
          bombs: [...state.bombs, action.newBomb],
          totalBomb: state.totalBomb + 1,
        };

        case NEW_BONUS:
          return {
            ...state,
            bonus: action.value,
          };

        case RESET_BONUS:
          return {
            ...state,
            bonus: {...state.bonus, actif: false},
          }
     
      default:
        return state;
    }
  };
  
  export default gameDatasRecucer;
  