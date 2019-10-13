import styled from 'styled-components';
import Row from 'react-bootstrap/Row'

import { device } from '../../../styles.js';


export const Line = styled(Row)`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 25%;

	@media ${device.laptop} { 
		height: 50%;
	}
`;

export const Heading = styled.div`
	width: 40%;
	height: 100%;
	margin-top: 10%;
	
	@media ${device.mobile} { 
		width:40%;
	}
	@media ${device.laptop} { 
		width:25%;
	}
`;

