// Import our Controllers
import { RouteOptions } from "fastify";
import {
  addToken,
  getSingleToken,
  getTokens,
  updateToken
} from "../controllers/tokenController";
// Import Swagger documentation
import * as documentation from "./documentation/tokenApi";

export let routes: RouteOptions[] = [
  {
    method: "GET",
    url: "/api/tokens",
    handler: getTokens,
    schema: documentation.getTokensSchema
  },
  {
    method: "GET",
    url: "/api/tokens/:id",
    handler: getSingleToken,
    schema: documentation.getTokenWithParamsSchema
  },
  {
    method: "POST",
    url: "/api/tokens",
    handler: addToken,
    schema: documentation.addTokenSchema
  },
  {
    method: "PUT",
    url: "/api/tokens/:id",
    handler: updateToken,
    schema: documentation.updateTokenSchema
  }
];
