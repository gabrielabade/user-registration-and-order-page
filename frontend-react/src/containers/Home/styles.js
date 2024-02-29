import styled from "styled-components";
import Background from "../../assets/background.png";
export const Container = styled.div`
  background: url("${Background}") repeat, #FFF3D9;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const Image = styled.img`
  margin-top: 30px;
`;


export const InputLabel = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.408px;
  color: white;
  margin-left: 25px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  box-shadow: 0px 4px 4px 0px #00000040;
  background: #ffffff;
  border-radius: 14px;
  width: 342px;
  height: 70px;
  padding-left: 25px;
  border: none;
  outline: none;

  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  color: #AF7B3A;
  margin-bottom: 20px;
`;

