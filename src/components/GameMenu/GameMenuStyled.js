import styled from 'styled-components';

const GameMenuStyled = styled.div`
  position: absolute;
  top: 10vh;
  left: 10vw;
  border: solid 1vh black;
  background: rgba(255,255,255,.5);
  border-radius: 6px;
  height: 80vh;
  width: 80vw;
  text-align: center;

  h1{
    font-size: 6vh;
    margin: 4vh 0 6vh;
  }

  ul{
    text-align: left;

    li{
      margin: 4vh;
    }

    .liButton{
      margin-top: 10vh;
      text-align: center;
    }

    .backButton{
      height: 10vh;
      width: 50vw;
      &:hover{
            border-color: #999;
            font-size: 3.2vh;
        }
    }

    .volumeButton{
      height : 7vh;
      width: 7vh;
      margin-left: 2vw;
      &:hover{
            border-color: #999;
        }
    }

    .button{
        font-family: 'PressStart2P';
        font-size: 3vh;
        border: solid 1vh black;
        background: rgba(255,255,255,.5);
        border-radius: 6px;
        

        
    }

    
    
  }
`;

export default GameMenuStyled;
