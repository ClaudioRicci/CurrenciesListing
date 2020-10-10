import React from "react";
import { render } from "@testing-library/react";
import TableHeader from "..";

test("Renders TableHeader", () => {
  const { getByText } = render(<TableHeader />);
  const TableHeaderCopy = getByText(/Currencies Table/i);
  expect(TableHeaderCopy).toBeInTheDocument();
});
