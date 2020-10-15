import React, { memo } from "react";
import shortid from "shortid";
import Header from "../Header";
import "./styles/LoadingCircle.scss";

const LoadingCircle = () => (
  <div
    className="centered-circle"
    data-testid="loadingCircle"
    key={shortid.generate()}
  >
    <Header title="Loading..." />
    <div className="loader"></div>
  </div>
);

export default memo(LoadingCircle);
