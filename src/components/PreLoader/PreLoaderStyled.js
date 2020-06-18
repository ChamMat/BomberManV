import styled from 'styled-components';

const PreLoaderStyled = styled.div`
    position: absolute;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    
    .hide {
        display:none;
    }

    .backgroundImage {
        position:absolute;
        top:0;
        left: 0;
        height: 100vh;
        width: 100vw;
    }

    .front{
        top: 10vh;
    }
`;

export default PreLoaderStyled;