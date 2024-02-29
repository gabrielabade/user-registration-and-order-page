const express = require("express");
const uuid = require("uuid");
const cors = require("cors");

const app = express();

app.use(cors());

const port = 3001;

app.use(express.json());

const orders = [];

const checkOrderId = (request, response, next) => {
  const { id } = request.params;

  const index = orders.findIndex((order) => order.id === id);

  if (index < 0) {
    return response.status(404).json({ error: "order not found" });
  }

  request.orderIndex = index;
  request.orderId = id;

  next();
};

const logRequest = (request, response, next) => {
  console.log(`[${request.method}] - ${request.url}`);
  next();
};

app.use(logRequest);

app.get("/order", (request, response) => {
  return response.json(orders);
});

app.get("/order/:id", checkOrderId, (request, response) => {
  const index = request.orderIndex;
  const id = request.orderId;

  return response.json(orders[index]);
});

app.post("/order", (request, response) => {
  const { order, clientName } = request.body;

  if (!order || !clientName) {
    return response
      .status(400)
      .json({ error: "Campos obrigatórios não preenchidos" });
  }

  const orderPush = {
    id: uuid.v4(),
    order,
    clientName,
    status: "Em preparação",
  };

  orders.push(orderPush);

  return response.status(201).json(orderPush);
});

app.put("/order/:id", checkOrderId, (request, response) => {
  const { order, clientName, status } = request.body;
  const index = request.orderIndex;
  const id = request.orderId;

  const modifyOrder = { id, order, clientName, status };

  orders[index] = modifyOrder;

  return response.json(modifyOrder);
});

app.delete("/order/:id", checkOrderId, (request, response) => {
  const index = request.orderIndex;

  orders.splice(index, 1);

  return response.status(204).json();
});

app.patch("/order/:id", checkOrderId, (request, response) => {
  const { status } = request.body;
  const index = request.orderIndex;

  if (status === "Seu pedido está pronto") {
    orders[index].status = status;
    return response.json(orders[index]);
  } else {
    return response.status(400).json({ error: "Invalid status" });
  }
});

app.listen(port, () => {
  console.log(`server started on port ${port} :)`);
});
