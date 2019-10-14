import styled from 'styled-components';
import Row from 'react-bootstrap/Row'

import { device } from '../../../styles.js';


export const Line = styled(Row)`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 50%;
		
	@media ${device.mobile} { 
		height: 40%;
	}
	@media ${device.mobilexs} { 
		height: 31s%;
	}

`;

export const Heading = styled.div`
	width: 40%;
	height: 100%;	
	@media ${device.mobile} { 
		width:40%;
		height: 50%;
	}
	@media ${device.laptop} { 
		width:25%;
	}
`;

