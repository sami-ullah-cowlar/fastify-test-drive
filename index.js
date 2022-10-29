const fastify = require("fastify");
const itemRoutes = require("./src/routes/items.routes");

// App
const appOptions = {
  logger: true,
};
const app = fastify(appOptions);
const port = 5005;

// Routes
app.register(itemRoutes);

// Server
const start = async () => {
  try {
    const address = await app.listen(port, "localhost");
    console.log(`server listening on ${address}`);
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

start();
