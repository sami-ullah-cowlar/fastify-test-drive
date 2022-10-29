const Item = {
  type: "object",
  properties: {
    id: { type: "number" },
    name: { type: "string" },
  },
};

const getItems = {
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
};

const getItem = {
  response: {
    200: {
      type: "object",
      properties: {
        success: { type: "boolean" },
        data: Item,
      },
    },
  },
};

const createItem = {
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
};

const updateItem = {
  response: {
    200: {
      type: "object",
      properties: {
        success: { type: "boolean" },
        data: Item,
      },
    },
  },
};

const deleteItem = {
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
};

module.exports = {
  getItem,
  getItems,
  createItem,
  updateItem,
  deleteItem,
};
