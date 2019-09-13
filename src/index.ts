// Require the framework and instantiate it
import * as fastify from "fastify";
import * as cors from "fastify-cors";
import * as helmet from "fastify-helmet";
// Import Swagger
import * as swagger from "fastify-swagger";
import { IncomingMessage, Server, ServerResponse } from "http";
// Require external modules
import * as mongoose from "mongoose";
import { AddressInfo } from "net";
// Import Swagger Options
import * as swaggerConfig from "./config/swagger";
// Require routes file
import { routes } from "./routes/index";
export const server: fastify.FastifyInstance<
  Server,
  IncomingMessage,
  ServerResponse
> = fastify({
  logger: true
});

// Register Swagger
server.register(swagger, swaggerConfig);
server.register(helmet, {
  hidePoweredBy: { setTo: `NodeJS ${process.version}` },
  noCache: true
});
// Cors
server.register(cors);
// Connect to DB
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose
  .connect("mongodb://localhost/loyalty_token_database")
  .then(() => server.log.info("MongoDB connected…"))
  .catch(err => server.log.info(err));

// Declare all routes
routes.forEach(route => {
  server.route(route);
});
// Run the server!
const start = async () => {
  try {
    await server.listen(3000);
    const address: AddressInfo = server.server.address() as AddressInfo;
    server.swagger();
    server.log.info(
      `swagger docs on ${address.address}:${address.port}${swaggerConfig.routePrefix}`
    );
    server.log.info(`listening on ${address.port}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
start();
