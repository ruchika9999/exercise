import styled from "styled-components";
import { center, animation, moveAnimation } from "../../css";

export const BoxFixedBottom = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  position: fixed;
  bottom: 10px;
`;

export const NextButton = styled.div`
  ${center}
  bottom: 0;
  cursor: pointer;
  width: 150px;
  height: 50px;
  transition: transform 750ms;
  will-change: transform;
  ${moveAnimation};
  &:hover {
    transform: ${(props) =>
      props.active === 0 ? "translateY(7px)" : "translateY(-7px)"};
  }
`;

export const BoxLogo = styled.div`
  position: absolute;
  border: 1px solid ${(props) => props.theme.grayscaleColor.level02};
  text-transform: uppercase;
  width: 140px;
  height: 40px;
  z-index: 999;
  top: 10px;
  left: 20px;
  font-weight: 500;
  color: ${(props) => props.theme.grayscaleColor.level02};
  border-radius: 2px;
  ${center}
`;

export const AppLink = styled.a`
  position: absolute;
  cursor: pointer;
  text-decoration: none;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 500;
  top: 10px;
  right: 20px;
  padding: 10px;
  color: ${(props) => props.theme.grayscaleColor.level02};
  z-index: 999;
  border-radius: 2px;
  ${center}
  transition: background 0.5s ease-in-out, color 0.5s ease-in-out;
  &:hover {
    background: #fff;
  }
`;

export const Heading = styled.h1`
  ${(props) => props.isAnimate && animation}
  font-size: ${(props) => (props.fontSize ? props.fontSize + "rem" : "20px")};
  color: ${(props) =>
    props.color ? props.color : props.theme.grayscaleColor.level03};
  @media ${(props) => props.theme.devices.tablet} {
    font-size: 24px;
  }
`;

export const Text = styled.p`
  ${(props) => props.isAnimate && animation}
  font-size: ${(props) => (props.fontSize ? props.fontSize + "rem" : "14px")};
  color: ${(props) =>
    props.color ? props.color : props.theme.grayscaleColor.level03};
  @media ${(props) => props.theme.devices.tablet} {
    font-size: 16px;
  }
`;

export const Align = styled.div`
  text-align: ${(props) => (props.direction ? props.direction : "left")};
`;
