import React, { memo } from "react";
import shortid from "shortid";
import TableHeader from "../TableHeader";
import TableBody from "../TableBody";
import "./styles/Table.scss";

const Table = () => (
  <table key={shortid.generate()}>
    <TableHeader />
    <TableBody />
  </table>
);

export default memo(Table);
