import React, { useContext } from "react";
import PropTypes from "prop-types";
import { BackgroundBox } from "./styles";
import { AnimationContext } from "../../context/animationContext";
import Carousel from "../Carousel";

const Background = ({ props }) => {
  const { activeNumber } = useContext(AnimationContext);
  const { id, images, sliderData } = props;
  return (
    <BackgroundBox
      images={images}
      active={id === activeNumber}
      activeNumber={activeNumber}
    >
      <Carousel sliderData={sliderData} />
    </BackgroundBox>
  );
};

PropTypes.Background = {
  images: PropTypes.string,
  id: PropTypes.number,
  sliderData: PropTypes.array.isRequired,
};

export default Background;
