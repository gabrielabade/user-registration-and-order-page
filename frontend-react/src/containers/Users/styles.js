import styled from "styled-components";
import Background from "../../assets/background.png";

export const Container = styled.div`
  background: url("${Background}") repeat, #FFF3D9;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  height: 100%;
  min-height: 100vh;
`;

export const Image = styled.img`
  margin-top: 30px;
`;

export const User = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
margin-top: 20px;

  box-shadow: 0px 4px 4px 0px #00000040;
  background: #ffffff;
  border-radius: 14px;
  width: 342px;
  height: 58px;

  border: none;
  outline: none;

  p {
    font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  color: #AF7B3A;
  margin-bottom: 5px;
  margin-top: 3px;
  
  }

  button{
    background: none;
    border: none;
    cursor: pointer;
  }
`;
