const { getItem, getItems } = require("../controllers/items.controllers");

// Options for get all items
const Item = {
  type: "object",
  properties: {
    id: { type: "number" },
    name: { type: "string" },
  },
};

const getItemsOptions = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          success: { type: "boolean" },
          data: {
            type: "array",
            items: Item,
          },
        },
      },
    },
  },
  handler: getItems,
};

const getItemOptions = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          success: { type: "boolean" },
          data: Item,
        },
      },
    },
  },
  handler: getItem,
};

function itemRoutes(app, options, done) {
  app.get("/items", getItemsOptions);
  app.get("/items/:id", getItemOptions);

  done();
}

module.exports = itemRoutes;
