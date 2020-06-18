import styled from 'styled-components';

const MusicManagerStyled = styled.div`
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

  @media (min-height: 500px) {
    height:6vh;
    width: 6vh;

    .icon{
      height:6vh;
      width: 6vh;
    }
  }
`;

export default MusicManagerStyled;
