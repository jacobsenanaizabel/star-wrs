import React from "react";
import { shallow } from "enzyme";

import Routes from "./Routes";

const initStateIfEmptyMock = jest.fn();

describe("Routes component", () => {
	it("should match snapshot", () => {
		expect(
			shallow(<Routes initStateIfEmpty={initStateIfEmptyMock} />)
		).toMatchSnapshot();
	});

	it("should invoke initStateIfEmpty", () => {
		shallow(<Routes initStateIfEmpty={initStateIfEmptyMock} />);
		expect(initStateIfEmptyMock).toHaveBeenLastCalledWith();
	});
});
