import React, { Fragment, useState } from "react";
import PropTypes from 'prop-types';

import Card from 'react-bootstrap/Card'
import Button from '../../atoms/Button'
import ListGroup from 'react-bootstrap/ListGroup'

import { Item } from "./style.js";


function Cardboard({ title, subtitle, list, button, img }) {

	const [interships, setInterships] = useState(false);

	const showInterships = event => {
		setInterships(true)
	}

	return (
		<Card style={{ width: '48%', height: '100%', margin: 'auto', background: '#d2a019' }}>
			<Card.Img variant="top" src={img} />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Subtitle>{subtitle}</Card.Subtitle>

			</Card.Body>
			{interships && (
				<Fragment>
					<ListGroup variant="flush">
						{list && list.length > 0 ? (
							list.map((data, index) => {

								return (<Item key={`${index}-listGroup`}> {data}</Item>)
							})) : "não possue nave :( "}
					</ListGroup>
				</Fragment>
			)}
			<Card.Body onClick={(e) => showInterships()}>
				<Button text={button} />
			</Card.Body>
		</Card>
	)
}


Cardboard.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.any,
};

Cardboard.defaultProps = {
	title: 'Title',
	subtitle: 'Subtitle',
};

export default Cardboard;