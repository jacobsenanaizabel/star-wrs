import React from 'react';
import Pagination from 'react-bootstrap/Pagination'
import { Line, PaginationItem } from './style.js';

class PaginationWrapper extends React.Component {
	constructor(props) {
		super(props);

		this.CalculateItems = this.CalculateItems.bind(this);
		this.nextPage = this.nextPage.bind(this);
	}

	CalculateItems(props) {
		var items = []
		const perLimit = Math.ceil(props.data / 10);
		for (let number = 1; number <= perLimit; number++) {
			items.push(
				<PaginationItem key={number} onClick={(e) => this.nextPage(number, props)}>
					{number}
				</PaginationItem>,
			);
		}
		return items;
	}

	nextPage(number, props) {
		return props.onClick(number)
	}

	render() {
		return (
			<Line>
				<Pagination>
					{this.props.data !== undefined && (
						this.CalculateItems(this.props)
					)}
				</Pagination>
			</Line>
		);
	}
}

export default PaginationWrapper;