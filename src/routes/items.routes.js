const { getItem, getItems, createItem, updateItem, deleteItem } = require(
  "../controllers/items.controllers",
);

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

const createItemOptions = {
  schema: {
    body: {
      type: "object",
      required: ["name"],
      properties: {
        name: { type: "string" },
      },
    },
    response: {
      201: {
        type: "object",
        properties: {
          success: { type: "boolean" },
          data: Item,
        },
      },
    },
  },
  handler: createItem,
};

const updateItemOptions = {
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
  handler: updateItem,
};

const deleteItemOptions = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          success: { type: "boolean" },
          data: {
            type: "string",
          },
        },
      },
    },
  },
  handler: deleteItem,
};

function itemRoutes(app, options, done) {
  app.get("/items", getItemsOptions);
  app.post("/items", createItemOptions);
  app.get("/items/:id", getItemOptions);
  app.put("/items/:id", updateItemOptions);
  app.delete("/items/:id", deleteItemOptions);

  done();
}

module.exports = itemRoutes;
