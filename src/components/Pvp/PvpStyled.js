import styled from 'styled-components';

const PvpStyled = styled.div`
    .buttonsMobil{
        position: absolute;
        width: 100vw;
        bottom: 1vh;

        .buttonMobilWrapper{
            display:flex;
            justify-content: space-between;
            align-items: flex-end;
            margin: 0 .2vw;
        }

        .buttonAction{
            display:flex;
            flex-direction: column-reverse;
        }

        .buttonMobil{
            width: 15vw;
            height: 25vh;
            margin: .2vh;
            border: none;
            background-color: rgba(255,255,255,0.1);
            &:hover {
                background-color: rgba(255,255,255,0.4);
            }
        }
    }

    @media (min-width:1000px){
        .buttonsMobil{
            display:none;
        }
    }
`;

export default PvpStyled;