import React from "react";
import { render } from "@testing-library/react";
import Header from "..";

test("Renders Header", () => {
  const { getByText } = render(<Header title="Currencies Table" />);
  const headerCopy = getByText(/Currencies Table/i);
  expect(headerCopy).toBeInTheDocument();
});
