import React from "react";
import { shallow } from "enzyme";
import Button from '../../atoms/Button'

import Cardboard from "./Cardboard";

var props = {
	title: "title example",
	subtitle: "subtitle example",
	button: "button test",
	list: [1, 2, 3, 4, 5, 6, 7, 8]
}

describe("Card component", () => {

	it("should Card match snapshot with empty content", () => {
		expect(shallow(<Cardboard />)).toMatchSnapshot();
	});

	it("should Card match snapshot with props", () => {
		expect(shallow(<Cardboard {...props} />)).toMatchSnapshot();
	});

	it("should Card match snapshot with props and list", () => {
		expect(shallow(<Cardboard {...props} list={props.list} />)).toMatchSnapshot();
	});

});
