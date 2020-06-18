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
      background-color: #445544;
      border: solid .4vh #000;
      border-radius: 3px;
  `;

export default StyledPlatform;