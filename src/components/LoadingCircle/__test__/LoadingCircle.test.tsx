import React from "react";
import Enzyme, { mount } from "enzyme";
import { expect } from "chai";
import ReactDOM from "react-dom";
import Adapter from "enzyme-adapter-react-16";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LoadingCircle from "../index";

Enzyme.configure({ adapter: new Adapter() });

let wrapper: any;

beforeEach(() => {
  wrapper = mount(<LoadingCircle />);
});

afterEach(cleanup);

describe("Loading Circle Tests", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<LoadingCircle />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("contains a Loader", () => {
    expect(wrapper.find(".centered-circle")).to.have.lengthOf(1);
  });
});
