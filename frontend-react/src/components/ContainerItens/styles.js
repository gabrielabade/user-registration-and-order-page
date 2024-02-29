import styled from "styled-components";

export const ContainerItens = styled.div`
  background: #AF7B3A;
  opacity: 0.60;

  
  border-radius: 61px 61px 0px 0px;
  backdrop-filter: blur(45px);

  padding: 50px 36px;
  display: flex;
  flex-direction: column;

  height: 100%;
  min-height: calc(100vh - 170px)
    ${(props) =>
      props.isBlur &&`
      backdrop-filter:blur; 
      min-height: calc(100vh - 170px);
      `};
`;
