import styled from 'styled-components';

const StyledPerso = styled.div`
    position: relative;
    top: 82vh;
    left: 10vw;

    .idle0 {
        background-image: url(/image/perso/sprite/idle/heroIdle00.png);
    }

    .perso {
        width:3vw;
        height:7vh;
        background-size:contain;
        background-repeat:no-repeat;
        background-position:center;
    }
    
`;

export default StyledPerso;