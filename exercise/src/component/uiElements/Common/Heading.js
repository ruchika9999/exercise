import React from "react";
import PropTypes from "prop-types";
import { Heading as Component } from "./styles";

const Heading = ({ children, fontSize, color, isAnimate }) => {
  return (
    <Component fontSize={fontSize} color={color} isAnimate={isAnimate}>
      {children}
    </Component>
  );
};

Heading.propTypes = {
  fontSize: PropTypes.number,
  color: PropTypes.string,
  isAnimate: PropTypes.bool,
};

export default Heading;
