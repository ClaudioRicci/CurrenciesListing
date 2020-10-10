import React, { memo } from "react";

const columnHeaders: string[] = [
  "Coin Name",
  "Current Price (USD)",
  "Opening price (USD)",
  "Price Increase"
];

const TableHeader = () => (
  <thead>
    <tr>
      {columnHeaders.map(columnHeader => (
        <th>{columnHeader}</th>
      ))}
    </tr>
  </thead>
);

export default memo(TableHeader);
