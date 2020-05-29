import styled from 'styled-components';

const StyledHome = styled.div`
    position:absolute;

    height: 100vh;
    width:100vw;
    background-color: rgba(255,255,255, .5);

    h1 {
        text-align:center;
        margin-top: 3vh;
    }

    .cadre {
        margin: 5vh auto;
        border: #000 2px solid;
        width: 50%;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        border-radius: 5px;
        background-color: #444;

        button {
            width: 50%;
            margin: 4vh;
            padding: 2vh;
            border: none;
            border-radius: 3px;
            background-color: #fff;
        }
    }
`;

export default StyledHome;