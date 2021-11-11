import styled from "styled-components";

export const Ul = styled.ul`
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Li = styled.li`
  display: block;
`;

export const Dot = styled.button`
  width: ${(props) => (props.active ? "40px" : "30px")};
  height: ${(props) => (props.active ? "10px" : "6px")};
  border: 0;
  outline: none;
  cursor: pointer;
  margin-top: 5px;
  margin-bottom: 5px;
  transition: width 0.3s;
  border-radius: 2px 0px 0px 2px;
  float: right;
  background: ${(props) =>
    props.active ? props.theme.primary : props.theme.grayscaleColor.level03};
`;
