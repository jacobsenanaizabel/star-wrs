import React from "react";
import { shallow, mount } from "enzyme";

import Button from "./Button";

describe("Button component", () => {
  it("should render Button match snapshot", () => {
    expect(shallow(<Button />)).toMatchSnapshot();
  });

  it('should render Button with proprety text', () => {
    expect(shallow(<Button text="botao" />)).toMatchSnapshot();
    expect(mount(<Button text="botao" />).find("button").length).toBe(1);
  });
});
