import React from 'react';
import LoadingStyled from './LoadingStyled';

import LoaderIcon from "react-loader-icon";

const Loading = () => {

  const documentHeight = document.documentElement.clientHeight*0.10

  return (
      <LoadingStyled>
          <div className="wrapper">
              <div>Loading... Please wait</div>
              <LoaderIcon type={"cylon"} size={documentHeight} />
          </div>
      </LoadingStyled>
  )
};

export default Loading;
