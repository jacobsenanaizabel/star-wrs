import React from "react";
import { shallow } from "enzyme";

import Icon from "./Icon";

var props = {
	icon: "starwars",
	width: 200,
	height: 100,
	fill: "#ffffff"
}
describe("Icon component", () => {
	it("should render Icon match snapshot", () => {
		expect(shallow(<Icon icon="starwars" />)).toMatchSnapshot();
	});

	it('should render Icon with props', () => {
		expect(shallow(<Icon {...props} />)).toMatchSnapshot();
	});
});
