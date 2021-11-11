import React, { useContext } from "react";
import PropTypes from "prop-types";
import VideoPlayer from "react-background-video-player";
import { VideoBox, DetailBox, BreakBox } from "./styles";
import { AnimationContext } from "../../context/animationContext";
import { Heading, Text } from "../Common";

const Video = ({ props }) => {
  const { activeNumber } = useContext(AnimationContext);
  const { id, url, heading, subHeadingTwo, subHeading } = props;
  const active = activeNumber === id;
  return (
    <>
      <VideoBox active={active}>
        <VideoPlayer src={url} autoPlay={true} muted={true} />
        <DetailBox>
          <Heading isAnimate={true} fontSize={2.4}>
            {heading}
          </Heading>
          <BreakBox isAnimate={true} />
          <Text isAnimate={true} fontSize={1.3}>
            {subHeading}
          </Text>
          <Text isAnimate={true} fontSize={1.3}>
            {subHeadingTwo}
          </Text>
        </DetailBox>
      </VideoBox>
    </>
  );
};

Video.propTypes = {
  id: PropTypes.number,
  url: PropTypes.string,
  heading: PropTypes.string,
  subHeadingTwo: PropTypes.string,
  subHeading: PropTypes.string,
  activeNumber: PropTypes.number,
};

export default Video;
