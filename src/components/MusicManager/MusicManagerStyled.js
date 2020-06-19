import styled from 'styled-components';

const MusicManagerStyled = styled.div`

  .mute {
    position: absolute;
    top: 2vh;
    left: 15vh;
    height: 5vh;
    width: 7vh;
    background-image: url(image/soundOn.png);
    background-size:contain;
    background-repeat: no-repeat;
    cursor:pointer;
  }

  .muteOff {
    background-image: url(image/soundOff.png);
  }

  .musicManagerWrapper{
    position: absolute;

    top: 2vh;
    left: 2vh;

    height:10vh;
    width: 10vh;

    background-color: gray;
    border-radius: 100%;

    .icon{
      height: 10vh;
      width: 10vh;
      cursor: pointer;
      
    }
  }

  @media (min-height: 500px) {
      .musicManagerWrapper{  
        height:6vh;
        width: 6vh;

        .icon{
          height:6vh;
          width: 6vh;
        }
      }
  }
`;

export default MusicManagerStyled;
