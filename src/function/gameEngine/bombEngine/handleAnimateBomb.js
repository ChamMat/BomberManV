import imagesDatas from 'datas/imagesDatas';

const handleImageData = (action) => {
    switch (action){
        case 'idle':
            return {
                img: 1,
                temporisation : 9,
            }
        case 'explode':
            return {
                img: 2,
                temporisation : 4,
            }
        default:;
    };
};

const handleAnimateBomb = (bombsDatas) => {

    return bombsDatas.map((bomb)=>{
        let {
            action,
            nbrImg,
            tempoImg,
            imageSrc,
            active,
            danger,
        } = bomb;


        let newNbrImg = nbrImg;
        let newTempoImg = tempoImg;
        let newImageSrc = imageSrc;
        let newActive = active;
        let newDanger = danger;

        const imgDatas = handleImageData(action); //Gestion des images a afficher

        newImageSrc = imagesDatas[imgDatas.img].path + imagesDatas[imgDatas.img].array[newNbrImg];
        
        if (newTempoImg >= imgDatas.temporisation){
            newNbrImg += 1;
            if (newNbrImg >= 5) {
                newDanger = false;
            }
            newTempoImg = 0;
            if (newNbrImg >= imagesDatas[imgDatas.img].array.length){

                if (bomb.action === 'explode')
                {
                    newActive = false;
                }else {
                    newNbrImg = 0;
                }
            }
        }else{
            newTempoImg += 1;
        }

        return {
            ...bomb,
            nbrImg: newNbrImg,
            tempoImg: newTempoImg,
            imageSrc: newImageSrc,
            active: newActive,
            danger: newDanger,
        }
    });

};

export default handleAnimateBomb;