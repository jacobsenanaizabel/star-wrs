import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';

import styled, { keyframes } from 'styled-components';
import blinks from '../../../assets/image/blinking.png';
import stars from '../../../assets/image/stars.png';
import { device } from '../../../styles.js';

export const Wrapper = styled(Fragment)`
  width:100%;
  height:100%;
  position: fixed;
`
export const Starts = styled.div`
  width:100%;
  height:100%;
  position:absolute;
  z-index:0;
  background:#000 url(${stars}) repeat top center;
`;

export const blinkingStart = keyframes`
from {background-position:0 0;}
to {background-position:-1000px 5000px;}
`

export const ContainerWrapped = styled(Container)`
  width:100%;
  height:100%;
  position:absolute;
  z-index:1;
  overflow: hidden;
  background:transparent  url(${blinks})  repeat top center;
  animation:${blinkingStart} 200s linear infinite;

  @media ${device.laptop} { 
		max-width:100%;
  }
  
  @media ${device.mobile} { 
    overflow-y:auto;
  }
  @media ${device.mobilexs} { 
    overflow-y:auto;
	}
`