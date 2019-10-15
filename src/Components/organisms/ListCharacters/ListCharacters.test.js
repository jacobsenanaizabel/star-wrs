import React from "react";
import { shallow } from "enzyme";

import ListCharacters from "./ListCharacters";

describe("FixedIncome component", () => {
  let getListCharacters;
  let getImgsCharacters;

  beforeEach(() => {
    getListCharacters = jest.fn();
    getImgsCharacters = jest.fn();
  });

  it("should have an initial state", () => {
    const component = shallow(<ListCharacters />);
  });

  it("should match snapshot with loading", () => {
    expect(shallow(<ListCharacters />)).toMatchSnapshot();
  });
});
