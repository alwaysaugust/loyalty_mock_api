// Import our Controllers
import { RouteOptions } from "fastify";
import { getKeyPair } from "../controllers/accountController";
import { addToken, getSingleToken } from "../controllers/tokenController";
import * as accountDocs from "./documentation/accountApi";
import * as tokenDocs from "./documentation/tokenApi";

export let routes: RouteOptions[] = [
  {
    method: "GET",
    url: "/api/tokens/:owner",
    handler: getSingleToken,
    schema: tokenDocs.getTokenWithParamsSchema
  },
  {
    method: "POST",
    url: "/api/tokens",
    handler: addToken,
    schema: tokenDocs.addTokenSchema
  },
  {
    method: "GET",
    url: "/api/accounts/keys",
    handler: getKeyPair,
    schema: accountDocs.getKeyPair
  }
];
