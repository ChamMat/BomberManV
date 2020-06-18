import imagesDatas from 'datas/imagesDatas';

const handleImageData = (action) => {
    switch (action){
        case 'idle':
            return {
                img: 4,
                temporisation : 4,
            }
        case 'walk':
            return {
                img: 5,
                temporisation : 2,
            }
        case 'jump':
            return {
                img: 5,
                temporisation : 1000,
            }
        case 'mort':
            return {
                img: 3,
                temporisation:4,
            }
        default:;
    };
};

const handleAnimatePersos = (persosDatas) => {

    return persosDatas.map((perso)=>{
        let {
            action,
            nbrImg,
            tempoImg,
            imageSrc,
        } = perso;


        let newNbrImg = nbrImg;
        let newTempoImg = tempoImg;
        let newImageSrc = imageSrc;

        const imgDatas = handleImageData(action); //Gestion des images a afficher

        newImageSrc = imagesDatas[imgDatas.img].path + imagesDatas[imgDatas.img].array[newNbrImg];

        if (action !== 'jump'){
            if (newTempoImg >= imgDatas.temporisation){
                newNbrImg += 1;
                newTempoImg = 0;
                if (newNbrImg >= imagesDatas[imgDatas.img].array.length){
                    newNbrImg = 0;
                }
            }else{
                newTempoImg += 1;
            }
        }else{
            newImageSrc = imagesDatas[imgDatas.img].path + imagesDatas[imgDatas.img].array[4]
        }

        return {
            ...perso,
            nbrImg: newNbrImg,
            tempoImg: newTempoImg,
            imageSrc: newImageSrc,
        }
    });

};

export default handleAnimatePersos;