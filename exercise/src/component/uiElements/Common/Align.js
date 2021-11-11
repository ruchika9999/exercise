import React from "react";
import PropTypes from "prop-types";
import { Align as Component } from "./styles";

export const Align = ({ direction, children }) => (
  <Component direction={direction}>{children}</Component>
);

Align.propTypes = {
  direction: PropTypes.string,
};
export default Align;
