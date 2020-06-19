// Action Types
import {
  GAME_STYLE,
  MUSIC,
  MENU,
  CHANGE_VOLUME,
  SOUND,
  END_GAME,
} from '../actions/gameSettings.action';

import {
  NEW_GAME,
} from '../actions/gameDatas.action';

// Initial State
const initialState = {
  gameStyle: '', //default: ''
  endGame: false, //default: false
  music:{
    mercury: '',
    mainBoss: '',
    bossIntro: '',
  },
  effect:{
    bombBlast: '',
    bomBonusSound: '',
    menuClick: '',
    speedBonusSound: '',
  },
  menuOpen: false,
  gamePause: false,
  volumeMusic: .4, // default .4
  volumeEffect: .5,
};

// Reducer
const preLoaderReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VOLUME:
      return {
        ...state,
        [action.songType]: Math.round(action.songVolume*10)/10
      };
    case GAME_STYLE:

    if (action.gameStyle !== state.gameStyle) {
      state.music.mercury.pause();
      state.music.mercury.currentTime = 0;
      state.music.mainBoss.pause();
      state.music.mainBoss.currentTime = 0;
      state.music.bossIntro.pause();
      state.music.bossIntro.currentTime = 0;
      }

      return {
        ...state,
        gameStyle: action.gameStyle,
      };
    case MUSIC:
      return {
        ...state,
        music: {...state.music, [action.name]: action.value}
      }
    case SOUND:
      return {
        ...state,
        effect: {...state.effect, [action.name]: action.value}
      }

    case MENU:
      return {
        ...state,
        menuOpen: state.menuOpen ? false : true,
      }

    case END_GAME:
      return{
        ...state,
        endGame: action.value,
      }

      case NEW_GAME:
        return{
          ...state,
          endGame: false,
        }
    default:
      return state;
  }
};

export default preLoaderReducer;
