const items = require("../data/items");

const getItems = (req, res) => {
  console.log("items");
  const response = { success: true, data: items };
  res.send(response);
};

const getItem = (req, res) => {
  const { id } = req.params;
  const response = {
    success: true,
    data: items.find((item) => item.id === Number(id)),
  };
  res.send(response);
};

module.exports = {
  getItem,
  getItems,
};
