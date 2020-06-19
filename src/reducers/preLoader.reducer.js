// Action Types
import {
    IMAGE_LOAD,
    AUDIO_LOAD,
    NEW_COUNT,
    GAME_READY,
  } from '../actions/preLoader.action';
  
  // Initial State
  const initialState = {
    imageLoad: false, //default: false;
    audioLoad: false, // default: false;
    count: 0,
    gameReady: false, // default: false,
  };
  
  // Reducer
  const preLoaderReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case IMAGE_LOAD:
        return {
          ...state,
          imageLoad: true,
        };
      case AUDIO_LOAD:
        return {
          ...state,
          audioLoad: true,
        };
      case NEW_COUNT:
        return {
          ...state,
          count: state.count + 1,
        };
      case GAME_READY:
        return {
          ...state,
          gameReady: true,
        }
      default:
        return state;
    }
  };
  
  export default preLoaderReducer;