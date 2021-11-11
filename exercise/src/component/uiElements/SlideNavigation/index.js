import React from "react";
import PropTypes from "prop-types";
import { Ul, Li, Dot } from "./styles";

const SlideNavigation = ({ children, active, navigationChange }) => {
  return (
    <Ul>
      {children.map((child, index) => (
        <Li key={index}>
          <Dot
            active={index === active}
            onClick={() => navigationChange(index)}
          />
        </Li>
      ))}
    </Ul>
  );
};

PropTypes.SlideNavigation = {
  active: PropTypes.number.isRequired,
  navigationChange: PropTypes.func.isRequired,
};

export default SlideNavigation;
