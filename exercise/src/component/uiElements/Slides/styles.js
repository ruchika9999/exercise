import styled from "styled-components";

export const SlideWrapper = styled.div`
  height: 100vh;
  transform: translate3d(0, ${(props) => props.percentage}, 0);
`;
