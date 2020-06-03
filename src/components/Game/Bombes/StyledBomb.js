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
    width:2vw;
    height:2vw ;
    background-color:black;
    border-radius:100%;
    
`;

export default StyledBomb;