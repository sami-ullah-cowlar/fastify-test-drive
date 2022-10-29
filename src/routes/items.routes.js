const itemController = require("../controllers/items.controllers");
const itemSchemas = require("../schemas/items.schemas");

const getItems = {
  schema: itemSchemas.getItems,
  handler: itemController.getItems,
};

const getItem = {
  schema: itemSchemas.getItem,
  handler: itemController.getItem,
};

const createItem = {
  schema: itemSchemas.createItem,
  handler: itemController.createItem,
};

const updateItem = {
  schema: itemSchemas.updateItem,
  handler: itemController.updateItem,
};

const deleteItem = {
  schema: itemSchemas.deleteItem,
  handler: itemController.deleteItem,
};

function itemRoutes(app, options, done) {
  app.get("/items", getItems);
  app.post("/items", createItem);
  app.get("/items/:id", getItem);
  app.put("/items/:id", updateItem);
  app.delete("/items/:id", deleteItem);

  done();
}

module.exports = itemRoutes;
