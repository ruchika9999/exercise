import React from "react";
import PropTypes from "prop-types";
import Background from "./Background";
import Video from "./Video";

const Slide = (props) => {
  const { type, ...rest } = props.item;

  return type === "video" ? (
    <Video props={rest} />
  ) : (
    <Background props={rest} />
  );
};

Slide.propTypes = {
  type: PropTypes.string,
  rest: PropTypes.object,
};

export default Slide;
