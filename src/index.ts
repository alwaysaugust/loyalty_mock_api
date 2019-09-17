import * as fastify from "fastify";
import * as cors from "fastify-cors";
import * as helmet from "fastify-helmet";
import * as swagger from "fastify-swagger";
import { IncomingMessage, Server, ServerResponse } from "http";
import * as mongoose from "mongoose";
import { AddressInfo } from "net";
import { config } from "./config/server";
import * as swaggerConfig from "./config/swagger";
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
  .connect(config.database)
  .then(() => server.log.info("MongoDB connected…"))
  .catch(err => server.log.info(err));

// Declare all routes
routes.forEach(route => {
  // tslint:disable-next-line: no-console
  console.log(route.url);
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
