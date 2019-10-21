import React, { Suspense, lazy } from "react";

import styled from "styled-components";
import stars from "./../assets/image/stars.png";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
`;
export const Starts = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
  background: #000 url(${stars}) repeat top center;
`;

function Lazy(Component) {
  const ComponentLoadable = lazy(Component);
  return props => (
    <Suspense
      fallback={
        <Wrapper>
          <Starts></Starts>
        </Wrapper>
      }
    >
      <ComponentLoadable {...props} />
    </Suspense>
  );
}

export default Lazy;
