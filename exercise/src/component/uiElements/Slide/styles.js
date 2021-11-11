import styled from "styled-components";
import { fadeIn, center, common, animation, left } from "../../css";

export const VideoBox = styled.div`
  ${common}
  ${center}
  animation: ${(props) => props.active && fadeIn} 500ms ease-in-out forwards;
  &:after {
    background-color: ${(props) => props.theme.videoBackground};
  }
`;
export const BackgroundBox = styled.div`
  background-size: cover;
  position: relative;
  background-position: center;
  padding-right: 150px;
  animation: ${(props) => props.active && fadeIn} 500ms ease-in-out forwards;
  @media ${(props) => props.theme.devices.desktop} {
    background-image: url(${(props) => props.images[0]});
    ${left}
  }
  @media ${(props) => props.theme.devices.laptop} {
    background-image: url(${(props) => props.images[1]});
  }
  @media ${(props) => props.theme.devices.tablet} {
    background-image: url(${(props) => props.images[2]});
    padding: 20px;
    ${center}
  }
  ${common} 
`;

export const DetailBox = styled.div`
  ${center}
  z-index: 999;
  flex-direction: column;
  @media ${(props) => props.theme.devices.tablet} {
    padding: 0 40px;
  }
`;

export const BreakBox = styled.div`
  ${(props) => props.isAnimate && animation}
  width: 100px;
  height: 5px;
  background-color: ${(props) => props.theme.grayscaleColor.level03};
  z-index: 999;
  margin-bottom: 20px;
`;
