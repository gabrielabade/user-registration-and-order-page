import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";
import Pedido from "../../assets/pedido.png";
import Trash from "../../assets/trash.svg";

import H1 from "../../components/Title"
import ContainerItens from "../../components/ContainerItens"
import Button from "../../components/Button"

import {
  Container,
  Image,
  User,
} from "./styles";

//JSX -> MISTURA HTML COM JAVASCRIPT
function Users() {
  const [users, setUsers] = useState([]);
  const history = useHistory()

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/order");
      setUsers(newUsers);
    }
    fetchUsers();
  }, []);

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/order/${userId}`)
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
  }

  function goBackPage(){
    history.push("/");
  }

  return (
    <Container>
      <Image alt="logo-image" src={Pedido} width="200" height="200"/>
      <ContainerItens isBlur={true}>
        <H1>Pedidos</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <div>
                <p> {user.order}</p>
                <p style={{ fontWeight: 'bold' }}>{user.clientName} </p>
              </div>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="lata-de-lixo" />
              </button>
            </User>
          ))}
        </ul>

        <Button isBack={true} onClick={goBackPage}>
        Voltar
        </Button>
      </ContainerItens>
    </Container>
  );
}

export default Users;
