import React from "react";
import shortid from "shortid";
import "./styles/TableBody.scss";

const columnHeaders: string[] = [
  "Coin Name",
  "Current Price (USD)",
  "Opening price (USD)",
  "Price Increase"
];

export default function TableBody() {
  return (
    <tbody key={shortid.generate()}>
      <tr key={shortid.generate()}>
        {columnHeaders.map(columnHeader => (
          <td key={shortid.generate()}>{columnHeader}</td>
        ))}
      </tr>
    </tbody>
  );
}
