import { keyframes, css } from "styled-components";

export const fadeIn = keyframes`
	0% {
		opacity: 0.7;
	}
	100% {
		opacity: 1;
	}
}
`;

export const fullFadeIn = keyframes`
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`;

export const center = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const left = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const common = css`
  height: 100vh;
  &:after {
    display: block;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    z-index: 0;
  }
`;

export const animation = css`
  animation: ${fullFadeIn} ease-in;
  animation-fill-mode: forwards;
  animation-duration: 2s;
`;

export const backgroundFade = css`
  animation: ${fadeIn} 300ms ease-in-out;
`;

export const moveAnimation = css`
  transition: transform 750ms;
  will-change: transform;
`;
