import React from "react";
import PropTypes from "prop-types";
import { NextButton as Component } from "./styles";

const NextButton = ({ children, onClick, active }) => {
  return (
    <Component active={active} onClick={onClick}>
      {children}
    </Component>
  );
};

PropTypes.NextButton = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool,
};

export default NextButton;
