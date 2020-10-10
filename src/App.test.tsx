import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const HeaderCopy = getByText(/Currencies Table/i);
  expect(HeaderCopy).toBeInTheDocument();
});
