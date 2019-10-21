import styled from 'styled-components';
import Button from 'react-bootstrap/Button'


export const ButtonCustom = styled(Button)`
	text-transform: uppercase;
	line-height: 1.3rem;
	border: none;
	border-radius: 6px;
	background-color: #737373;

	:hover {
		background-color: #fff;
		color: #565656;
	  }
`;

