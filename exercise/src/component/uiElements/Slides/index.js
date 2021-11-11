import React, { useState, useContext } from "react";
import { FixedBottom, NextButton, Logo, Link } from "../Common";
import { ArrowUp, ArrowDown } from "../../Icon";
import SlideNavigation from "../SlideNavigation";
import { SlideWrapper } from "./styles";
import { AnimationContext } from "../../context/animationContext";

const Slides = (props) => {
  const [active, setActive] = useState(0);
  const { setActiveNumber } = useContext(AnimationContext);

  const goNext = () => {
    if (active < props.children.length - 1) {
      setActive((prevState) => prevState + 1);
      setActiveNumber((prevState) => prevState + 1);
    }
    if (active > 0) {
      setActive((prevState) => prevState - 1);
      setActiveNumber((prevState) => prevState - 1);
    }
  };

  const navigationChange = (index) => {
    setActive(index);
    setActiveNumber(index);
  };

  const percentage = -100 * active + "%";
  return (
    <>
      <Logo />
      {active !== 0 && <Link>DISCOVER MORE</Link>}
      <SlideWrapper percentage={percentage}>
        {props.children.map((child, index) => {
          return child;
        })}
      </SlideWrapper>
      <FixedBottom>
        <NextButton onClick={goNext} active={active}>
          {active <= 0 ? (
            <ArrowDown fill="#316AF1" />
          ) : (
            <ArrowUp fill="#316AF1" />
          )}
        </NextButton>
      </FixedBottom>
      <SlideNavigation
        children={props.children}
        active={active}
        navigationChange={navigationChange}
      />
    </>
  );
};

export default Slides;
