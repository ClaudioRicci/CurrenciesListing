import React from "react";
import { mount } from "enzyme";
import { expect } from "chai";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Table from "..";
Enzyme.configure({ adapter: new Adapter() });

let wrapper: any;

beforeEach(() => {
  wrapper = mount(<Table />);
});

afterEach(cleanup);

describe("Table Tests", () => {
  test("1 <Thead> Renders", () => {
    expect(wrapper.find("thead")).to.have.lengthOf(1);
  });

  test("4 <TH> elements render", () => {
    expect(wrapper.find("th")).to.have.lengthOf(4);
  });

  test("1 <TBody> Renders", () => {
    expect(wrapper.find("tbody")).to.have.lengthOf(1);
  });
});
