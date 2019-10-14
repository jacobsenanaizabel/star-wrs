import styled, { keyframes } from 'styled-components';
import Row from 'react-bootstrap/Row'


export const Line = styled(Row)`
	display: flex;
	align-items: center;
	justify-content: center;
`;


export const spin = keyframes`
from { transform: rotate(360deg); }
to { transform: rotate(0deg); }
`

export const Loading = styled.div`
	border: 10px solid #f3f3f3;
	border-radius: 50%;
	border-top: 10px solid #343a40;
	width: 60px;
	height: 60px;
	animation: ${spin} 1s linear infinite;
	margin-top: 5%;
`;

