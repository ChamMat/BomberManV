import styled from 'styled-components';

const StyledBomb = styled.div.attrs((props) => {
    const {
        posX,
        posY,
    } = props.props.datas;

    return ({
        style: {
            top: parseInt(posY + 2.5) + 'vh',
            left: posX + 'vw',
        },
})})`
    position: absolute;
    .bombe {
        width:2vw;
        height:2vw ;
        background-repeat: no-repeat;
        background-size:contain;
    }
    /* background-color:black; */
    /* border-radius:100%; */

    .bombe0 {
        background-image: url(/image/bomb/bomb0.png);
    }

    .bombe1 {
        background-image: url(/image/bomb/bomb1.png);
        width: 2.3vw;
        height: 2.3vw;
    }
    
`;

export default StyledBomb;