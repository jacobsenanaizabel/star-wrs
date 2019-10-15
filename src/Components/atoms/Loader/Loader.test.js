import React from "react";
import { shallow } from "enzyme";

import Loader from "./Loader";

describe("Loader component", () => {

	it("should render Loader match snapshot", () => {
		expect(shallow(<Loader />)).toMatchSnapshot();
	});
});
