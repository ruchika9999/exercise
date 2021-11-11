import styled, { css } from "styled-components";
import { moveAnimation } from "./../../css";

export const nextArrow = css`
  top: 40%;
  right: -45px;
`;
export const prevArrow = css`
  top: 40%;
  left: -45px;
`;

export const Box = styled.div`
  z-index: 999;
  width: 600px;
  display: block;
  @media ${(props) => props.theme.devices.tablet} {
    width: 400px;
  }
`;

export const Card = styled.div`
  display: flex;
  min-height: 200px;
  max-height: 200px;
  @media ${(props) => props.theme.devices.tablet} {
    width: 300px;
  }
`;
export const CardInner = styled.div`
  margin: 4px;
  background: ${(props) => props.theme.transparentBg};
  padding: 20px;
  border-radius: 30px 0 30px 0;
`;

export const ArrowBox = styled.span`
  position: absolute;
  font-size: 2.5em;
  font-weight: bold;
  cursor: pointer;
  ${(props) => (props.type === "nextArrow" ? nextArrow : prevArrow)}
  ${moveAnimation};
  &:hover {
    transform: ${(props) =>
      props.type === "nextArrow" ? "translateX(3px)" : "translateX(-3px)"};
  }
`;
