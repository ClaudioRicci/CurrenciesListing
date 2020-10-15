import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
Enzyme.configure({ adapter: new Adapter() });
import Header from "..";

afterEach(cleanup);

describe("Header Tag Tests", () => {
  test("Renders Header", () => {
    const { getByText } = render(<Header title="Currencies Table" />);
    const headerCopy = getByText(/Currencies Table/i);
    expect(headerCopy).toBeInTheDocument();
  });

  test("Caption Renders Correctly and matches Snapshot", () => {
    const tree = renderer.create(<Header title="test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
