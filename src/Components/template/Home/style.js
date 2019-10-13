import styled, { keyframes } from 'styled-components';
import blinking from '../../../assets/image/blinking.png';
import stars from '../../../assets/image/stars.png';

import Container from 'react-bootstrap/Container';

export const Wrapper = styled(Container)`
  width:100%;
  height:100%;
  position:absolute;
  z-index:0;
  background:#000 url(${stars}) repeat top center;
`;

export const keyFrameBlinkingStart = keyframes`
from {background-position:0 0;}
to {background-position:-1000px 5000px;}
`

export const Blinking = styled(Container)`
  width:100%;
  height:100%;
  position:absolute;
  z-index:1;
  background:transparent  url(${blinking})  repeat top center;
  animation:${keyFrameBlinkingStart} 200s linear infinite;
`