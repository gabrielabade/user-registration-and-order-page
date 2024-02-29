import styled from "styled-components";

export const Button = styled.button`
  width: 342px;
  height: 74px;
  margin-top: 40px;

  background: ${ props =>
    props.isBack && "#FFF3D9"};
  border: ${props => props.isBack ? "1px solid white;" : "none"};
  border-radius: 14px;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 28px;
  color: ;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.5;
  }
`;
