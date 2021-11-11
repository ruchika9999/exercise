import React from "react";
import PropTypes from "prop-types";
import { Text as Component } from "./styles";

const Text = ({ children, fontSize, color, isAnimate }) => {
  return (
    <Component fontSize={fontSize} color={color} isAnimate={isAnimate}>
      {children}
    </Component>
  );
};

Text.propTypes = {
  fontSize: PropTypes.number,
  color: PropTypes.string,
  isAnimate: PropTypes.bool,
};
export default Text;
