import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";
import Logo from "../../assets/logo.png";


import H1 from "../../components/Title"
import ContainerItens from "../../components/ContainerItens"
import Button from "../../components/Button"

import {
  Container,
  Image,
  InputLabel,
  Input,
} from "./styles";

//JSX -> MISTURA HTML COM JAVASCRIPT
function App() {
  const [users, setUsers] = useState([]);
  const history = useHistory()
  
  const inputOrder = useRef();
  const inputName = useRef();

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/order", {
      order: inputOrder.current.value,
      clientName: inputName.current.value,
    });

    console.log(newUser);
    setUsers([...users, newUser]);

    history.push("/usuarios")
  }



  return (
    <Container>
      <Image alt="logo-image" src={Logo} width="200" height="200"/>
      <ContainerItens>
        <H1>Faça seu pedido!</H1>

        <InputLabel>Pedido:</InputLabel>
        <Input ref={inputOrder} placeholder="O que você deseja?"></Input>

        <InputLabel>Nome:</InputLabel>
        <Input ref={inputName} placeholder="Digite seu nome"></Input>

        <Button onClick={addNewUser}>
          Confirmar
        </Button>

  
      </ContainerItens>
    </Container>
  );
}

export default App;
