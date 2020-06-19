import React from 'react';
import HomeStyled from './HomeStyled';

import Loading from 'components/Loading/Loading';
import MenuHome from 'containers/MenuHome.cont';


const Home = (props) => {
  const {
    imageLoad,
    audioLoad,
    gameIsReady,
    gameReady,
  } = props;

    let loading = true;
    const soundClick = new Audio('audio/sound/menuClick.wav');

    if (imageLoad && audioLoad) {
        loading = false;
    }

    const handleClickLoadEnd = () => {
        if (!loading){
            soundClick.volume = .1;
            soundClick.play();
            document.removeEventListener('keydown', handleKeyDown);
            gameIsReady();
        }
    };

    const handleKeyDown = (evt) => {
        if (evt.key === 'Enter') {
            soundClick.volume = .1;
            soundClick.play();
            document.removeEventListener('keydown', handleKeyDown);
            handleClickLoadEnd();
        }
    };

    document.removeEventListener('keydown', handleKeyDown);
    document.addEventListener('keydown', handleKeyDown);
    
    return (
        <HomeStyled>
            <div className="homeWrapper">
                <h1>BombermanV</h1>
                { loading &&
                    <Loading />
                }
                {
                    !loading && !gameReady &&
                    <button className="button loadEnd" onTouchStart={handleClickLoadEnd} onClick={handleClickLoadEnd}> Play! </button>
                }
                {
                    gameReady &&
                    <MenuHome />
                }
                <div />
            </div>
        </HomeStyled>
    )
};

export default Home;
