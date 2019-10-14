import React, { Fragment } from "react";
import PropTypes from 'prop-types';

import Card from 'react-bootstrap/Card'
import Button from '../../atoms/Button'
import ListGroup from 'react-bootstrap/ListGroup'

function Cardboard({ title, subtitle, list, button, img }) {
	console.log(img)
	return (
		<Card style={{ width: '48%', height: '100%', margin: 'auto', background: '#d2a019' }}>
			<Card.Img variant="top" src={img} />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Subtitle>{subtitle}</Card.Subtitle>

			</Card.Body>
			{list && (
				<Fragment>
					<ListGroup variant="flush">
						{list.map((data) => {
							return (<ListGroup.Item> {data}</ListGroup.Item>)
						})}
					</ListGroup>
				</Fragment>
			)}
			<Card.Body>
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