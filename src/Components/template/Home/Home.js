import React, { Fragment } from 'react';
import { Wrapper, Blinking } from './style.js';
import Header from "../../molecules/Header"

function Home() {
	return (
		<Fragment>
			<Wrapper />
			<Blinking>
				<Header />
			</Blinking>
		</Fragment>

	);
}

export default Home;
