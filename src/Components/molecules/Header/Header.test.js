import React from "react";
import { shallow, } from "enzyme";

import Header from "./Header";

describe("Header component", () => {
	it("should render Header match snapshot", () => {
		expect(shallow(<Header />)).toMatchSnapshot();
	});

});
