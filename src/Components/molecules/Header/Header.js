import React from 'react';
import { Line, Heading } from './style.js';

import Icon from "../../atoms/Icon"

function Header() {
	return (
		<Line>
			<Heading>
				<Icon icon="starwars" height="auto" width="auto" fill="#ffffff" alt="starwars icon" />
			</Heading>
		</Line>
	);
}

export default Header;
