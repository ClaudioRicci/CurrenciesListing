import React, { memo } from "react";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => <h1>{title}</h1>;

export default memo(Header);
