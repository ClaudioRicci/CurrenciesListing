import React from "react";
import { mount } from "enzyme";
import { expect } from "chai";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TableBody from "..";
Enzyme.configure({ adapter: new Adapter() });

let wrapper: any;

beforeEach(() => {
  wrapper = mount(<TableBody />);
});

afterEach(cleanup);
describe("Table Body Tests", () => {
  test("1 <Tbody> Renders", () => {
    expect(wrapper.find("tbody")).to.have.lengthOf(1);
  });
  test("4 <TD> elements render", () => {
    expect(wrapper.find("td")).to.have.lengthOf(4);
  });
  test("First <TD> to contain text 'Coin Name' ", () => {
    expect(
      wrapper
        .find("td")
        .at(0)
        .text()
    ).to.equal("Coin Name");
  });
});
