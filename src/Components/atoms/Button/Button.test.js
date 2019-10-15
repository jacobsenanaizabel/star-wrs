import React from "react";
import { shallow, mount } from "enzyme";

import Button from "./Button";

describe("Button component", () => {
  it("should match snapshot", () => {
    expect(shallow(<Button>Text</Button>)).toMatchSnapshot();
  });

  it('should render an "button" tag', () => {
    expect(shallow(<Button>Text</Button>)).toMatchSnapshot();
    expect(mount(<Button>Text</Button>).find("button").length).toBe(1);
  });
});
