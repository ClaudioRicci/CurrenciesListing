import React, { memo } from "react";
import shortid from "shortid";
import "./styles/TableHeader.scss";
import Header from "../Header";

const columnHeaders: string[] = [
  "Coin Name",
  "Current Price (USD)",
  "Opening price (USD)",
  "Price Increase"
];

const TableHeader = () => (
  <>
    <Header title="Currencies Table" />
    <thead key={shortid.generate()}>
      <tr key={shortid.generate()}>
        {columnHeaders.map(columnHeader => (
          <th key={shortid.generate()}>{columnHeader}</th>
        ))}
      </tr>
    </thead>
  </>
);

export default memo(TableHeader);
