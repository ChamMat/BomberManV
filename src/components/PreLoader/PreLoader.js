import React from 'react';
import imagesArray, { imagesLenght } from 'datas/imagesDatas';
import audioArray, { audiosLenght } from 'datas/soundDatas';
import useInterval from 'function/useInterval';

import PreLoaderStyled from './PreLoaderStyled';

import GamePanel from 'containers/GamePanel.cont';

const PreLoader = (props) => {
    const {
        imageIsLoad,
        audioIsLoad,
        count,
        setCount,
    } = props;
    
    let sumOfLoadImage = 0;
    const handleLoadImage = () => {
        // console.log(evt.target);
        sumOfLoadImage += 1;
        if (sumOfLoadImage === imagesLenght()) {
            imageIsLoad();
        }
    };

    let sumOfLoadAudio = 0;
    const handleLoadAudio = () => {
        // console.log(evt.target);
        sumOfLoadAudio += 1;
        if (sumOfLoadAudio === audiosLenght()) {
            audioIsLoad();
        }
    };

    if (count === 2){

        audioArray.forEach((musicArray)=> {
            musicArray.array.forEach((music) => {
                const audio = new Audio(`${musicArray.path}${music}`);
                audio.preload = 'auto';
                audio.play();
                audio.volume=0;
                audio.addEventListener('canplaythrough', handleLoadAudio);
            })
        });
    }

    useInterval(() => {
        setCount();
    },count <= 1 ? 3000 : null);


    return (
        <PreLoaderStyled>
            <img className="backgroundImage back" src="image/background/backgroundBack.png" alt="" />
            <img className="backgroundImage front" src="image/background/backgroundFront.png" alt="" />
            <GamePanel />
            <div className="hide">
                 {  count === 2 &&
                    imagesArray.map((object) => (
                        object.array.map((image) => (
                            <img
                                key={image}
                                className={`image ${image}`}
                                src={`${object.path}${image}`}
                                preload="auto"
                                onLoad={handleLoadImage}
                                alt={image}
                            />
                        ))
                    ))
                 }
            </div>
                            
        </PreLoaderStyled>
    )
};

export default PreLoader;
