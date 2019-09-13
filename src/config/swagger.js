module.exports = {
  exposeRoute: true,
  routePrefix: "/documentation",
  swagger: {
    info: {
      description: "REST API built with Node.js, MongoDB, Fastify and Swagger",
      title: "Loyalty Token API",
      version: "0.0.1"
    },
    externalDocs: {
      description: "Find more info here",
      url: "https://swagger.io"
    },
    consumes: ["application/json"],
    host: "localhost:3000",
    produces: ["application/json"],
    schemes: ["http"]
  }
};
