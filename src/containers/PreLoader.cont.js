import { connect } from 'react-redux';

import PreLoader from 'components/PreLoader/PreLoader';

import { imageLoad, audioLoad, newCount } from 'actions/preLoader.action';

const mapStateToProps = (state)=> {
  return ({
    count: state.preLoader.count,
  })
};

const mapDispatchToProps = (dispatch) => ({
    imageIsLoad: () => {
        dispatch(imageLoad())
      },
    audioIsLoad: () => {
    dispatch(audioLoad())
    },
    setCount: () => {
      dispatch(newCount())
    },
    
});

const PreLoaderContainer = connect(mapStateToProps, mapDispatchToProps)(PreLoader);

export default PreLoaderContainer;
