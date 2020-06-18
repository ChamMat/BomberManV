import { KEY_INPUT } from 'actions/keyboardInput.action';

const initialState = {
    ArrowUp: false,
    ArrowRight: false,
    ArrowDown: false,
    ArrowLeft: false,
    KeyW: false,
    KeyS: false,
    KeyD: false,
    KeyA: false,

    ArrowUpPause: true,
    ArrowDownPause: true,
    KeyWPause: true,
  };
  
  // Reducer
  const keyboardReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case KEY_INPUT:
          let pause;
          let value;

          if (!action.pauseActive) {

            if (action.key === 'ArrowUp'){ // SI l'event est flêche haut
              pause = 'ArrowUpPause';
              if (action.value){  // Si on a presse Down
                if (!state.ArrowUpPause){ // et que arrow pause est false, alors action.value est toujours false;
                  action.value = false;
                  value = false;
                }else {
                  value = false; // si arrowPuase est true alors elle passe en false;
                }
              }else { // Si on a press Up
                value = true;
              }
            }
          }

          if (!action.pauseActive) {

            if (action.key === 'ArrowDown'){ // SI l'event est flêche haut
              pause = 'ArrowDownPause';
              if (action.value){  // Si on a presse Down
                if (!state.ArrowDownPause){ // et que arrow pause est false, alors action.value est toujours false;
                  action.value = false;
                  value = false;
                }else {
                  value = false; // si arrowPuase est true alors elle passe en false;
                }
              }else { // Si on a press Up
                value = true;
              }
            }
          }


        return{
            ...state,
            [action.key]: action.value,
            [pause]: value,
        }
      default:
        return state;
    }
  };
  
  export default keyboardReducer;
  