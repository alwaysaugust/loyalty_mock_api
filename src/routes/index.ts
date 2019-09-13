// Import our Controllers
import { RouteOptions } from "fastify";
import * as tokenController from "../controllers/tokenController";
// Import Swagger documentation
import * as documentation from "./documentation/tokenApi";

export let routes: RouteOptions[] = [
  {
    method: "GET",
    url: "/api/tokens",
    handler: tokenController.getTokens,
    schema: documentation.getTokensSchema
  },
  {
    method: "GET",
    url: "/api/tokens/:id",
    handler: tokenController.getSingleToken,
    schema: documentation.getTokenWithParamsSchema
  },
  {
    method: "POST",
    url: "/api/tokens",
    handler: tokenController.addToken,
    schema: documentation.addTokenSchema
  },
  {
    method: "PUT",
    url: "/api/tokens/:id",
    handler: tokenController.updateToken,
    schema: documentation.updateTokenSchema
  },
  {
    method: "DELETE",
    url: "/api/tokens/:id",
    handler: tokenController.deleteToken
  }
];
