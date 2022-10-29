let items = require("../data/items");

const getItems = (req, res) => {
  const response = { success: true, data: items };
  res.send(response);
};

const getItem = (req, res) => {
  const { id } = req.params;
  const item = items.find((item) => item.id === Number(id));
  const response = { success: true, data: item };
  res.send(response);
};

const createItem = (req, res) => {
  const { name } = req.body;
  const id = Math.floor(Math.random() * 1000);
  const response = { success: true, data: { id, name } };
  items = [...items, response.data];
  res.status(201).send(response);
};

const updateItem = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  let data;
  items = items.map((item) => {
    if (item.id === Number(id)) {
      data = { ...item, name };
      return data;
    }
    return item;
  });

  // items = items.filter((item) => item.id !== Number(id));
  const response = { success: true, data };
  res.send(response);
};

const deleteItem = (req, res) => {
  const { id } = req.params;
  items = items.filter((item) => item.id !== Number(id));
  const response = { success: true, data: "Item Deleted Successfully" };
  res.send(response);
};

module.exports = {
  getItem,
  getItems,
  createItem,
  updateItem,
  deleteItem,
};
