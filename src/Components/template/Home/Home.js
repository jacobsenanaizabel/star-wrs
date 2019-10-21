import React from 'react';
import { Wrapper, Starts, ContainerWrapped } from './style.js';
import Header from "../../molecules/Header"
import ListCharacters from "../../organisms/ListCharacters"

function Home() {
	return (
		<Wrapper>
			<Starts />
			<ContainerWrapped>
				<Header />
				<ListCharacters />
			</ContainerWrapped>
		</Wrapper>
	);
}

export default Home;
