import styled from 'styled-components';

const StyledPlatform = styled.div.attrs((props) => ({
    style: {
      top: props.top,
      left: props.left,
      height: props.height,
      width: props.width,
    },
  }))`
      position:absolute;
      background-color: #6e6d4e;
      border: solid .4vh #132b26;
      border-radius: 3px;
  `;

export default StyledPlatform;