import React from "react";
import { mount } from "enzyme";
import { expect } from "chai";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
Enzyme.configure({ adapter: new Adapter() });

let wrapper: any;

beforeEach(() => {
  wrapper = mount(<App />);
});

afterEach(cleanup);

describe("App Render Tests", () => {
  test("1 <Header> Renders", () => {
    expect(wrapper.find("caption")).to.have.lengthOf(1);
  });
});
