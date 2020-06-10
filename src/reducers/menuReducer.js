// Action Types
import {
  PAUSE,
  SET_MUSIC,
  VOLUME_MUSIQUE_PLUS,
  VOLUME_MUSIQUE_MOIN,
  VOLUME_EXPLOSION_PLUS,
  VOLUME_EXPLOSION_MOIN,
  CHANGE_PAGE,
  SAVE_MUSIQUE_CURRENTTIME,
  FIN_DE_PARTIE,
  RESET,
  SET_NBR_JOUEUR,
  CHARGER,
} from '../actions/menu';

// Initial State
const initialState = {
  fichierCharger:false,
  pause: false,
  finDePartie: false,
  musique: true,
  volumeMusique: 0.2,
  musiquecurrentTime: 0,
  volumeExplosion: 0.7,
  page: 'home',
  nombreJoueur: '0',
};

let volume;

// Reducer
const menuReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHARGER:
      return {
        ...state,
        fichierCharger : action.value,
      };

    case PAUSE:
        const pause = () => {
            if (state.pause && !state.finDePartie){
                return false;
            }
            return true;
        }
      return {
        ...state,
        pause: pause(),
      };
    case SET_MUSIC:
      return {
        ...state,
        [action.music]: action.value,
      };
    case VOLUME_MUSIQUE_PLUS:
      if (state.volumeMusique >= 1){
        volume = 1;
      }else {
        volume = Math.round((state.volumeMusique + 0.1)*10)/10;
      }
      return {
        ...state,
        volumeMusique: volume,
      };

      case VOLUME_MUSIQUE_MOIN:
        if (state.volumeMusique <= 0){
          volume = 0;
        }else {
          volume = Math.round((state.volumeMusique - 0.1)*10)/10;
        }
        return {
          ...state,
          volumeMusique: volume,
        };

        case VOLUME_EXPLOSION_PLUS:
          if (state.volumeExplosion >= 1){
            volume = 1;
          }else {
            volume = Math.round((state.volumeExplosion + 0.1)*10)/10;
          }
          return {
            ...state,
            volumeExplosion: volume,
          };

        case VOLUME_EXPLOSION_MOIN:
          if (state.volumeExplosion <= 0){
            volume = 0;
          }else {
            volume = Math.round((state.volumeExplosion - 0.1)*10)/10;
          }
          return {
            ...state,
            volumeExplosion: volume,
          };

        case CHANGE_PAGE:
          return {
            ...state,
            page: action.page,
            musiquecurrentTime: 0,
            pause: false,
            finDePartie: false,
            musiqueAmbiance: null,
          }

          case SAVE_MUSIQUE_CURRENTTIME:
            return {
              ...state,
              musiquecurrentTime: action.currentTime,
            }

          case FIN_DE_PARTIE:
            return {
              ...state,
              pause: true,
              finDePartie: true,
          }

          case RESET:
            return {
              ...state,
              pause: false,
              finDePartie: false,
              musique: true,
              musiquecurrentTime: 0,
              musiqueAmbiance: null,
            }

          case SET_NBR_JOUEUR:
            return {
              ...state,
              nombreJoueur: action.nombreJoueur,
            }

    default:
      return state;
  }
};

export default menuReducer;