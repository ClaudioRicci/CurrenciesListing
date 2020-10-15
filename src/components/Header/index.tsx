import React, { memo } from "react";
import shortid from "shortid";
import "./styles/Header.scss";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => (
  <caption key={shortid.generate()}>{title}</caption>
);

export default memo(Header);
