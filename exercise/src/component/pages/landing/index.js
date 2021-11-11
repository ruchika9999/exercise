import React, { useState } from "react";
import Slides from "../../uiElements/Slides";
import Slide from "../../uiElements/Slide";
import slideData from "../../../data/slideData";
import { AnimationContext } from "../../context/animationContext";

const Landing = () => {
  const [activeNumber, setActiveNumber] = useState(0);
  return (
    <AnimationContext.Provider value={{ activeNumber, setActiveNumber }}>
      <Slides>
        {slideData.map((item) => (
          <Slide item={item} key={item.id} />
        ))}
      </Slides>
    </AnimationContext.Provider>
  );
};

export default Landing;
